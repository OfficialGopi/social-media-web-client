import { Avatar, Button, IconButton } from "@mui/material";
import AppLayout from "../components/layouts/AppLayout";
import { SettingsIcon } from "../assets/icons/AsideIcons";
import PostsIcon from "../assets/icons/PostsIcon";
import { useParams } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import { usePostsSelector, useUserSelector } from "../hooks/selectorHook";
import {
  useSavePostsDispatcher,
  useSetAllDialogCloseDispatcher,
  useSetPageNotInboxDispatcher,
} from "../hooks/dispatchHook";
import { getMyPosts } from "../services/posts.service";

import toast, { LoaderIcon } from "react-hot-toast";
import { getUserDataByUsername } from "../services/users.service";

const ViewDialog = lazy(() => import("./../components/dialogs/ViewDialog"));

const Profile = () => {
  const { username } = useParams();
  const { user } = useUserSelector();
  const { posts } = usePostsSelector();
  const setAllDialogClose = useSetAllDialogCloseDispatcher();
  const setPageNotInbox = useSetPageNotInboxDispatcher();

  const [userData, setUserData] = useState<{
    user: any;
    followers: number;
    followings: number;
  } | null>(null);

  const [followed, setFollowed] = useState<boolean>(false);

  const handleToggleFollow = () => {};

  useEffect(() => {
    if (username === user.username) setUserData(user);
    else {
      getUserDataByUsername(username).then((data) => {
        if (data.success) {
          console.log(data);
          setUserData(data.data);
        } else {
          toast.error(data.message);
        }
      });
    }
  }, [username]);

  useEffect(() => {
    setPageNotInbox();
    setAllDialogClose();
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center">
      <div className="w-full gap-24 flex p-10 justify-center items-center">
        <div>
          <IconButton>
            <Avatar
              src={userData?.user?.profilePic && userData.user.profilePic}
              sx={{
                width: 150,
                height: 150,
              }}
            />
          </IconButton>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">
              {userData?.user?.username && userData.user.username}
            </h1>
            <IconButton
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <SettingsIcon />
            </IconButton>
          </div>
          <div className="flex gap-10 py-3">
            <span>{posts.length} posts</span>
            <span>{userData?.followers} followers</span>
            <span>{userData?.followings} following</span>
          </div>
          <div>
            <span className="text-sm font-semibold">
              {userData?.user?.firstName + " "}
              {userData?.user?.lastName}
            </span>
          </div>
          {username != user?.username && (
            <div className="flex gap-4 my-3">
              {followed ? (
                <Button
                  sx={{
                    height: "30px",
                  }}
                  color="primary"
                  type="button"
                  variant="outlined"
                  onClick={handleToggleFollow}
                >
                  Followed
                </Button>
              ) : (
                <Button
                  sx={{
                    height: "30px",
                  }}
                  color="primary"
                  type="button"
                  variant="contained"
                  onClick={handleToggleFollow}
                >
                  Follow
                </Button>
              )}
              <Button
                sx={{
                  height: "30px",
                }}
                color="primary"
                type="button"
                variant="outlined"
              >
                Message
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="w-[65%] bg-white h-[2px] bg-opacity-15"></div>
      <div>
        <button className="flex items-center gap-1">
          <PostsIcon />
          <span className="text-sm py-3">POSTS</span>
        </button>
      </div>
      <Section key={"posts"} />
    </div>
  );
};

const Section = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [postInDialog, setPostInDialog] = useState(null);

  const { posts } = usePostsSelector();
  const savePosts = useSavePostsDispatcher();

  const onClose = () => {
    setPostInDialog(null);
    setDialogOpen(false);
  };

  useEffect(() => {
    if (!posts.length) {
      setLoading(true);
      getMyPosts()
        .then((res) => {
          if (res.success) {
            savePosts(res.data);
            console.log(res.data);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [posts]);

  return (
    <div className="flex flex-wrap  w-[600px] border border-slate-700">
      <Suspense fallback={<LoaderIcon />}>
        <ViewDialog
          isOpen={isDialogOpen}
          posts={postInDialog}
          onClose={onClose}
        />
      </Suspense>
      {isLoading && (
        <div className=" p-3 flex items-center justify-center">
          <div className="scale-150">
            <LoaderIcon />
          </div>
        </div>
      )}
      {posts.map((post: any, index: number) => {
        return (
          <>
            <button
              key={index}
              className="flex transition-colors duration-500 w-1/3 hover:bg-[rgba(255,255,255,0.1)]"
              onClick={() => {
                setPostInDialog(post);
                setDialogOpen(true);
              }}
            >
              <object data={post?.attachments[0]} className="w-full"></object>
            </button>
          </>
        );
      })}
    </div>
  );
};

export default AppLayout()(Profile);
