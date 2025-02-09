import { useFileHandler } from "6pp";
import DialogSnippet from "./DialogSnippet";
import { Image } from "@mui/icons-material";
import { useState } from "react";
import { createPost } from "./../../services/posts.service";
import { useSaveOnePostDispatcher } from "../../hooks/dispatchHook";
import toast from "react-hot-toast";

const PostDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const files = useFileHandler("multiple", 10, 10);
  const [caption, setCaption] = useState("");
  const saveOnePost = useSaveOnePostDispatcher();

  const handleSavePost = (e: any) => {
    const toastLoadingId = toast.loading("Posting...");

    e.preventDefault();
    createPost({
      caption,
      files: files.file,
    })
      .then((data) => {
        toast.remove(toastLoadingId);
        if (data.success) {
          saveOnePost(data);
          toast.success("Post successfully posted");
        } else {
          toast.error("Error Posting...");
        }
      })
      .finally(() => {
        files.clear();
        setCaption("");
      });
    onClose();
  };

  return (
    <>
      <DialogSnippet isOpen={isOpen} onClose={onClose}>
        <form className="w-[400px]  border rounded-lg bg-black p-4 flex flex-col">
          <div className="flex p-4 flex-col gap-4">
            <label className="text-xl">Upload Post</label>
            <input
              type="file"
              onChange={files.changeHandler}
              className="hidden"
              id="file-input"
              accept="image/*"
            />
            {files.preview.length == 0 && (
              <button
                className="w-full border h-full p-4"
                onClick={(e) => {
                  e.preventDefault();
                  const fileInput = document.getElementById("file-input")!;
                  fileInput.click();
                }}
              >
                <Image fontSize="large" />
                <span>Click here to select post</span>
              </button>
            )}
            {files.preview.length > 0 && (
              <div className="w-full h-full flex items-center flex-col justify-center">
                <object data={files.preview[0]} className=""></object>
                <div className="flex flex-col gap-4">
                  <textarea
                    placeholder="Enter your caption"
                    className="bg-transparent border px-2 py-1"
                    value={caption}
                    onChange={(e) => {
                      setCaption(e.target.value);
                    }}
                  />
                  <div className="w-full flex justify-around">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        files.clear();
                        onClose();
                      }}
                      className="p-2 bg-red-500 text-white rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSavePost}
                      className="p-2 bg-green-500 text-white rounded-lg"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </DialogSnippet>
    </>
  );
};

export default PostDialog;
