import { X } from "lucide-react";
import DialogSnippet from "../shared/DialogSnippet";

const AddChatDialog = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <DialogSnippet bgOpacity={0.5} isOpen={isOpen} onClose={onClose}>
        <div className="w-[90vw] overflow-hidden sm:w-[600px] flex rounded-xl bg-neutral-800">
          <div className="flex flex-col w-full justify-center items-center">
            <div className="w-full p-4 border-b text-center relative ">
              <h2 className="text-lg font-bold">New Message</h2>
              <X
                onClick={onClose}
                className="absolute h-full top-1 right-3 hover:cursor-pointer active:text-neutral-400 transition-colors"
              />
            </div>
            <div className="w-full p-2  border-b flex items-center gap-4">
              <span>To :</span>
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 text-sm outline-0 focus:outline-0 rounded-sm"
              />
            </div>
            <div className="w-full h-32"></div>
          </div>
        </div>
      </DialogSnippet>
    </>
  );
};

export default AddChatDialog;
