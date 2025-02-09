import {
  CallOutlined,
  EmojiEmotions,
  ImageRounded,
  InfoOutlined,
  Mic,
  Send,
  ThumbUp,
  VideoCameraBack,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ChatSection = () => {
  return (
    <div className="h-full w-full flex relative flex-col">
      <Top />
      <div className="flex-1   w-full"></div>
      <Bottom />
    </div>
  );
};

const Top = () => {
  return (
    <div className="h-[75px] w-full z-0 border-b border-white flex items-center justify-between p-4 border-opacity-15">
      <NavLink
        className="flex items-center gap-3 text-xl font-semibold"
        to={"/"}
      >
        <Avatar />
        <div className="flex flex-col">
          <span>John Doe</span>
          <span className="text-xs font-normal">Last Seen 5m ago</span>
        </div>
      </NavLink>
      <div className="flex items-center">
        <IconButton
          sx={{
            color: "white",
          }}
        >
          <CallOutlined />
        </IconButton>
        <IconButton
          sx={{
            color: "white",
          }}
        >
          <VideoCameraBack />
        </IconButton>
        <IconButton
          sx={{
            color: "white",
          }}
        >
          <InfoOutlined />
        </IconButton>
      </div>
    </div>
  );
};

const Bottom = () => {
  const [text, setText] = useState("");
  return (
    <div className=" flex items-center justify-center min-h-[75px] p-4 w-full ">
      <div className="flex items-center min-h-[44px]   w-full  border px-2 rounded-[50px]">
        <IconButton
          sx={{
            color: "white",
          }}
        >
          <EmojiEmotions />
        </IconButton>
        <textarea
          rows={1}
          placeholder="Message"
          style={{
            position: "relative",
            bottom: "0px",
          }}
          className="bg-inherit flex-1 resize-none    max-h-[180px]  text-base outline-none align-middle py-2 px-4"
          value={text}
          onChange={(e) => {
            console.log(e.target.scrollHeight);
            setText(e.target.value);
            e.target.style.height = `auto`;
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          onClick={(e) => console.dir(e)}
        />

        {text.length != 0 ? (
          <IconButton
            sx={{
              color: "white",
            }}
          >
            <Send />
          </IconButton>
        ) : (
          <>
            <IconButton
              sx={{
                color: "white",
              }}
            >
              <Mic />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
              }}
            >
              <ImageRounded />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
              }}
            >
              <ThumbUp />
            </IconButton>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatSection;
