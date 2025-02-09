import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";

const PersonalChat = () => {
  return (
    <>
      {Array.from(Array(30)).map((val: any, index: number) => (
        <PersonalChatSpecific val={val} key={index} to={index.toString()} />
      ))}
    </>
  );
};
const PersonalChatSpecific = ({ val, to }: { val: any; to: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `w-full z-0 relative flex items-center justify-start  gap-2 bg-white bg-opacity-15 py-3 px-6`
          : `w-full z-0 relative flex items-center justify-start  gap-2 hover:bg-white hover:bg-opacity-5 py-3 px-6`
      }
      to={`${to}`}
    >
      <Avatar
        sx={{
          zIndex: 0,
          width: 56,
          height: 56,
        }}
      />
      <div className="flex flex-col   h-full w-[calc(100%-56px)] items-start">
        <span className="text-base text-white">John Doe</span>
        <span className="text-sm text-gray-500">Active 5m ago</span>
      </div>
    </NavLink>
  );
};

export default PersonalChat;
