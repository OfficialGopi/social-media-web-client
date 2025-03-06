import { Phone, Send, VideoIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Message = () => {
  const {
    chatId,
  }: {
    chatId?: string | null;
  } = useParams<string>();

  const [user, setUser] = useState({
    name: "gopi",
    username: "gopi",
    profilePic: "https://picsum.photos/200/300",
  });

  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    setMessage("");
  }, [chatId]);

  return (
    <div className="w-full h-full flex flex-col">
      <nav className="px-6 py-3 border-b w-full">
        <div className="flex justify-between gap-2 items-center">
          <img
            src={user.profilePic}
            onClick={() => {
              navigate(`/${user.username}`);
            }}
            className="w-[44px] h-[44px] object-cover rounded-[100%] hover:cursor-pointer"
          />
          <div className="flex flex-col flex-1 ">
            <h2
              className="text-lg font-bold hover:cursor-pointer"
              onClick={() => {
                navigate(`/${user.username}`);
              }}
            >
              {user.name}
            </h2>
            <p className="text-sm text-gray-500">Last seen 2mins ago</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button className="rounded-full hover:bg-[rgba(255,255,255,0.2)] p-3 transition-[colors transform] duration-300 cursor-pointer active:scale-90">
              <Phone />
            </button>
            <button className="rounded-full hover:bg-[rgba(255,255,255,0.2)] p-3 transition-[colors transform] duration-300 cursor-pointer active:scale-90">
              <VideoIcon />
            </button>
          </div>
        </div>
      </nav>
      <div className="flex-1 overflow-y-scroll">
        <div className=""></div>
      </div>
      <div className="p-5 flex items-center ">
        <div className="flex border flex-1 rounded-2xl px-3 py-1">
          <textarea
            rows={1}
            name="message"
            id="message "
            className="flex-1 p-2 outline-none resize-none max-h-[180px] "
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          />
          <button className="p-2 hover:bg-neutral-800 rounded-[100%] active:scale-90 transition-transform duration-300">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
