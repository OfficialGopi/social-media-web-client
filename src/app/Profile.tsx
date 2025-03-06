import { useEffect, useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import { useOpenAside } from "../hooks/dispatchHook";
import { useUserSelector } from "../hooks/selectorHook";
import { useParams } from "react-router-dom";
import { IUser } from "../types/toolkit.types";
import { Link, Settings, SquareActivityIcon } from "lucide-react";

const Profile = () => {
  const { username } = useParams();
  const { user } = useUserSelector();

  const [isSameAsUser, setSameAsUser] = useState<boolean>(false);

  const [userInProfile, setUserInProfile] = useState<IUser>(user);

  const openAside = useOpenAside();

  const handleClickOnAvatar = () => {};

  const handleClickOnSettings = () => {};

  const handleClickOnEditProfile = () => {};

  useEffect(() => {
    openAside();
  }, []);

  useEffect(() => {
    if (user.username === username) {
      setSameAsUser(true);
      setUserInProfile(user);
    } else {
      setSameAsUser(false);
    }
  }, []);

  return (
    <div className="w-full flex  flex-col items-center">
      <div className="sm:w-[560px] md:w-[700px] w-full md:border-b ">
        <div className="pt-10 sm:px-10 px-2 flex  justify-center sm:justify-start gap-5 sm:gap-10">
          <button
            className="w-[80px] sm:w-[150px] h-[80px]  sm:h-[150px] rounded-full group hover:cursor-pointer"
            onClick={handleClickOnAvatar}
          >
            <img
              src={userInProfile.profilePic}
              className="w-full h-full rounded-full object-cover group-hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.5)]  group-hover:shadow-gray-50 transition-shadow"
            />
          </button>
          <div className="">
            <div className="flex gap-4 ">
              <h1 className="text-xl font-bold">{userInProfile.username}</h1>
              <div className="flex items-center gap-4 flex-col">
                <button
                  onClick={handleClickOnSettings}
                  className="hover:bg-neutral-800 rounded-full p-1 active:scale-90 transition-[colors_transform]"
                >
                  <Settings />
                </button>
                <button
                  className="py-1 px-2 bg-neutral-700 hover:bg-neutral-800 rounded-lg transition-colors"
                  onClick={handleClickOnEditProfile}
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="w-full hidden  md:flex gap-10 ">
              <button className="p-2">
                <span className="font-semibold ">3 </span>Posts
              </button>
              <button className="p-2">
                <span className="font-semibold ">300 </span>Followings
              </button>
              <button className="p-2">
                <span className="font-semibold "> 300 </span>Followers
              </button>
            </div>
            <div className="w-full px-10 py-5">
              <h3 className="text-sm font-semibold">
                {userInProfile.firstName}{" "}
                {userInProfile.middleName && userInProfile.middleName}{" "}
                {userInProfile.lastName && userInProfile.lastName}
              </h3>
              <div>
                <div className="flex flex-col items-start gap-1 py-2">
                  {userInProfile.websites &&
                    userInProfile.websites.map(
                      (website: string, index: number) => (
                        <a
                          key={index}
                          className="flex items-center text-sm gap-2"
                          href={
                            website.startsWith("http")
                              ? website
                              : "https://" + website
                          }
                          target="_blank"
                        >
                          <Link className="w-[16px]" />
                          <span>{website}</span>
                        </a>
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:hidden  flex flex-1 items-center">
        <button className="flex-1 border p-2 h-full  flex flex-col">
          <span className="font-semibold ">3 </span>
          <span>Posts</span>
        </button>
        <button className="flex-1 border p-2 h-full flex flex-col">
          <span className="font-semibold ">300 </span>
          <span>Followings</span>
        </button>
        <button className="flex-1 border p-2 h-full flex flex-col">
          <span className="font-semibold "> 300 </span>
          <span>Followers</span>
        </button>
      </div>
      <div className="sm:w-[560px] md:w-[700px] w-full md:border-b py-2">
        <div className="w-full flex items-center justify-center gap-6">
          <button className="flex items-center justify-center border p-2 rounded-lg">
            <SquareActivityIcon />
            <span>POSTS</span>
          </button>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default AppLayout()(Profile);
