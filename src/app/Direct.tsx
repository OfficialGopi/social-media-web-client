import { useEffect, useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import { useCloseAside } from "../hooks/dispatchHook";
import { useUserSelector } from "../hooks/selectorHook";
import { Edit } from "lucide-react";
import { Link, Outlet, useParams } from "react-router-dom";
import AddChatDialog from "../components/dialogs/AddChatDialog";

const Direct = ({ isInChat }: { isInChat: boolean }) => {
  const closeAside = useCloseAside();
  const { user } = useUserSelector();

  const [isPersonal, setPersonal] = useState<boolean>(true);

  const [isAddDialogOpen, setAddDialogOpen] = useState<boolean>(false);

  const [thisChatId, setThisChatId] = useState<string | null>(null);

  const { chatId } = useParams();

  useEffect(() => {
    closeAside();
  }, []);

  useEffect(() => {
    if (chatId) {
      setThisChatId(chatId);
    } else {
      setThisChatId(null);
    }
  }, [chatId]);

  return (
    <div className="w-full  h-screen flex items-center">
      <div
        className={`w-full md:w-[350px] border-r h-full md:flex  flex-col ${
          isInChat ? "hidden" : "flex"
        }`}
      >
        <AddChatDialog isOpen={isAddDialogOpen} setOpen={setAddDialogOpen} />
        <div className="h-[74px] w-full flex items-center justify-between overflow-hidden px-[24px] pt-[36px] pb-[12px]">
          <Link to={`/${user.username}`} className="text-xl font-bold">
            {user.username}
          </Link>
          <button
            onClick={() => {
              setAddDialogOpen(true);
            }}
            className="hover:cursor-pointer active:text-slate-300 transition-colors duration-300"
          >
            <Edit />
          </button>
        </div>
        <div className="border-b border-slate-200 flex items-center justify-between">
          <button
            onClick={() => {
              setPersonal(true);
            }}
            className={`hover:cursor-pointer flex-1 relative py-[12px] px-[16px] border-white ${
              isPersonal && "border-b group"
            }`}
          >
            <span className={`${!isPersonal && "opacity-50"}`}>Personal</span>
          </button>
          <button
            onClick={() => {
              setPersonal(false);
            }}
            className={`hover:cursor-pointer flex-1 relative py-[12px] px-[16px] border-white ${
              !isPersonal && "border-b"
            }`}
          >
            <span className={`${isPersonal && "opacity-50"}`}>Group</span>
          </button>
        </div>
        <div className="w-full overflow-y-scroll">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (chat, index) => (
              <ChatSection
                key={index}
                chat={{ _id: index }}
                isActive={index.toString() === thisChatId}
                user={{
                  name: "gopi",
                  username: "gopi",
                  profilePic: "https://picsum.photos/200/300",
                }}
              />
            )
          )}
        </div>
      </div>

      <div
        className={`${
          !isInChat ? "hidden" : "flex"
        } md:flex md:w-[calc(100%-350px)] h-full`}
      >
        <Outlet />
      </div>
    </div>
  );
};

const ChatSection = ({
  chat,
  user,
  isActive,
}: {
  chat: any;
  user: any;
  isActive: boolean;
}) => {
  return (
    <Link
      to={`/direct/chat/${chat._id}`}
      className={`${
        isActive
          ? "bg-[rgba(255,255,255,0.15)]"
          : "hover:bg-[rgba(255,255,255,0.1)] active:bg-[rgba(255,255,255,0.2)]"
      } hover:cursor-pointer   w-full h-[72px] py-[8px] px-[24px] flex items-center gap-2`}
    >
      <span className="h-full aspect-square">
        <img
          className="h-full aspect-square object-cover rounded-[100%] "
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </span>
      <div className="w-full flex flex-col items-start">
        <span className="">{user.name}</span>
        <div className="flex gap-4">
          <span className="text-xs text-neutral-400">Hello Hi</span>
          <span className="text-xs text-neutral-400">3m ago</span>
        </div>
      </div>
    </Link>
  );
};

export default AppLayout()(Direct);
