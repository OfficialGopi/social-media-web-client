import React, { useState } from "react";
import GooglecityLogo from "../../assets/icons/GooglecityLogo.svg";
import GoogleCity from "../../assets/icons/GoogleCity.svg";
import { Link, useNavigate } from "react-router-dom";
import {
  CreateIcon,
  ExploreIcon,
  HomeIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  ReelsIcon,
  SearchIcon,
} from "../../assets/icons/AsideIcons";
import SearchDialog from "../dialogs/SearchDialog";
import NotificationDialog from "../dialogs/NotificationDialog";
import { LiveTv, PostAdd } from "@mui/icons-material";
import { Avatar, AvatarTypeMap } from "@mui/material";
import { useDialogSelector, useUserSelector } from "../../hooks/selectorHook";
import {
  useSetAllDialogCloseDispatcher,
  useToggleCreateOpenDispatcher,
  useToggleNotificationOpenDispatcher,
  useToggleSearchOpenDispatcher,
} from "../../hooks/dispatchHook";
import PostDialog from "../dialogs/PostDialog";
import { JSX } from "@emotion/react/jsx-runtime";
import { OverridableComponent } from "@mui/material/OverridableComponent";
const Aside = () => {
  const { user } = useUserSelector();

  const [isPostOpen, setPostOpen] = useState(false);

  const setAllDialogClose = useSetAllDialogCloseDispatcher();
  const toggleSearchOpen = useToggleSearchOpenDispatcher();
  const toggleNotificationOpen = useToggleNotificationOpenDispatcher();
  const toggleCreateOpen = useToggleCreateOpenDispatcher();

  const { isAsideOpen, isNotificationOpen, isSearchOpen, isCreateOpen } =
    useDialogSelector();

  const onClickSearch = () => {
    toggleSearchOpen();
    if (isSearchOpen) {
      setAllDialogClose();
    }
  };

  const onClickNotificaiton = () => {
    toggleNotificationOpen();
    if (isNotificationOpen) {
      setAllDialogClose();
    }
  };

  const onToggleCreate = () => {
    toggleCreateOpen();
  };

  const onOpenPost = () => {
    setPostOpen(true);
  };

  const onPostClose = () => {
    setPostOpen(false);
  };

  return (
    <>
      <PostDialog isOpen={isPostOpen} onClose={onPostClose} />
      <NotificationDialog />
      <SearchDialog />
      <div
        className={`hidden md:flex w-[73px]  z-10 bg-black  h-full flex-col justify-around relative border border-white border-opacity-15  duration-500 transition-all    ${
          isAsideOpen && "lg:w-[245px] xl:w-[336px] lg:p-5"
        }`}
      >
        <div className="w-full flex justify-center h-[92px]">
          <Link to={"/"} className="active:opacity-50 transition-opacity">
            {!isAsideOpen ? (
              <img src={GooglecityLogo} className=" lg:flex hidden h-[48px]" />
            ) : (
              <img src={GoogleCity} className=" lg:flex hidden h-[48px]" />
            )}
            <img
              src={GooglecityLogo}
              className=" flex lg:hidden h-[48px] w-[48px]"
            />
          </Link>
        </div>
        <div
          className={`${
            !isAsideOpen && "items-center"
          } w-full flex gap-2 flex-col justify-center`}
        >
          <LinkComp to={""} Icon={HomeIcon} label={"Home"} />
          <NonLinkComp
            Icon={SearchIcon}
            label={"Search"}
            onClick={onClickSearch}
          />

          <LinkComp to={"explore"} Icon={ExploreIcon} label={"Explore"} />

          <LinkComp to={"reels"} Icon={ReelsIcon} label={"Reels"} />
          <LinkComp
            to={"direct/inbox"}
            Icon={MessagesIcon}
            label={"Messages"}
          />
          <NonLinkComp
            Icon={NotificationIcon}
            label={"Notifications"}
            onClick={onClickNotificaiton}
          />
          <div className="relative ">
            <NonLinkComp
              Icon={CreateIcon}
              label={"Create"}
              onClick={onToggleCreate}
            />
            <div
              className={`absolute left-0 overflow-hidden  duration-500 transition-all   rounded-lg w-[200px] z-30  bg-[rgb(38,38,38)] ${
                isCreateOpen ? "h-[88px]" : "h-0"
              }`}
            >
              <button
                className="h-[44px] hover:bg-white hover:bg-opacity-15 w-full  flex items-center justify-between px-3"
                onClick={() => {
                  onOpenPost();
                }}
              >
                <span className="text-[#fff]">Post</span>
                <PostAdd
                  sx={{
                    color: "white",
                  }}
                />
              </button>
              <button className="h-[44px] hover:bg-white hover:bg-opacity-15  w-full  flex items-center justify-between px-3">
                <span className="text-[#fff]">Live Video</span>
                <LiveTv
                  sx={{
                    color: "white",
                  }}
                />
              </button>
            </div>
          </div>
          <LinkComp
            to={`${user && user.username}`}
            Icon={Avatar}
            label={"Profile"}
            src={user && user.profilePic}
          />
        </div>
        <div
          className={`${
            !isAsideOpen && "items-center"
          } w-full flex gap-2 flex-col justify-center`}
        >
          <NonLinkComp Icon={MoreIcon} label={"More"} />
        </div>
      </div>
    </>
  );
};

const LinkComp = ({
  to,
  label,
  Icon,
  src,
}: {
  to: string;
  label: string;
  Icon: OverridableComponent<AvatarTypeMap>;
  src?: string;
}) => {
  const setAllDialogClose = useSetAllDialogCloseDispatcher();
  const { isAsideOpen } = useDialogSelector();
  const navigate = useNavigate();
  return (
    <button
      className={`h-[48px]  rounded-lg  lg:px-2 transition-colors duration-500 gap-3 justify-center ${
        isAsideOpen ? "lg:justify-start md:w-full" : "md:w-[52px] "
      }  w-[48px] hover:bg-[rgba(255,255,255,0.2)]  flex items-center`}
      onClick={() => {
        setAllDialogClose();
        navigate(`/${to}`);
      }}
    >
      {src ? (
        <Icon
          sx={{
            width: "24px",
            height: "24px",
          }}
          src={src}
        />
      ) : (
        <Icon />
      )}
      {isAsideOpen && <span className="text-lg hidden lg:flex">{label}</span>}
    </button>
  );
};
const NonLinkComp = ({
  children,
  label,
  Icon,
  onClick,
}: {
  children?: React.ReactNode;
  label: string;
  Icon: ({ sx, src }: { sx?: any; src?: string }) => JSX.Element;
  onClick?: () => void;
}) => {
  const { isAsideOpen } = useDialogSelector();
  return (
    <button
      className={`h-[48px]  rounded-lg relative lg:px-2 transition-colors gap-3 justify-center ${
        isAsideOpen ? "lg:justify-start md:w-full" : "md:w-[52px] "
      }  w-[48px] hover:bg-[rgba(255,255,255,0.2)]  flex items-center`}
      onClick={onClick}
    >
      <Icon />
      {isAsideOpen && <span className="text-lg hidden lg:flex">{label}</span>}
      {children && children}
    </button>
  );
};

export default Aside;
