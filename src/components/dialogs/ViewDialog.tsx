import { useEffect } from "react";
import DialogSnippet from "./DialogSnippet";
import { Comment, ThumbUpSharp } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ViewDialog = ({
  posts,
  isOpen,
  onClose,
}: {
  posts: any;
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    console.log(posts?.attachments[0]);
  });
  return (
    <>
      <DialogSnippet isOpen={isOpen} onClose={onClose}>
        <div className="w-[1200px] h-[800px]  bg-black border rounded-sm flex relative">
          <div className="w-[700px] h-[700px] border flex flex-col">
            <object data={posts?.attachments[0]}></object>
            <div className="flex">
              <IconButton
                color="inherit"
                onClick={() => {
                  console.log("like");
                }}
              >
                <ThumbUpSharp fontSize="large" />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => {
                  console.log("like");
                }}
              >
                <Comment fontSize="large" />
              </IconButton>
            </div>
          </div>
          <div className="flex-1 border"></div>
        </div>
      </DialogSnippet>
    </>
  );
};

export default ViewDialog;
