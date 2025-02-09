import { lazy, Suspense, useEffect, useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Outlet } from "react-router-dom";
import {
  useSetAllDialogCloseDispatcher,
  useSetPageInboxDispatcher,
} from "../hooks/dispatchHook";

const PersonalChat = lazy(() => import("../components/specific/PersonalChat"));
const GroupChat = lazy(() => import("../components/specific/GroupChat"));

const Inbox = () => {
  const setPageInbox = useSetPageInboxDispatcher();
  const setAllDialogClose = useSetAllDialogCloseDispatcher();
  const [chat, setChat] = useState(0);
  useEffect(() => {
    setPageInbox();
    setAllDialogClose();
  }, []);
  return (
    <>
      <>
        <main className="h-full w-full flex">
          <section className="h-full flex flex-col w-[400px] ">
            <header className="h-[75px] flex border-r border-white border-opacity-15 justify-between px-6 pt-9 pb-3 ">
              <h1 className="text-xl font-bold ">gopikanta__mondal_</h1>
              <IconButton color="inherit" size="large">
                <Add />
              </IconButton>
            </header>
            <nav className="w-full border-r border-b h-[50px] border-white border-opacity-15">
              <button
                className={`${
                  chat == 0 ? " border-opacity-100" : "border-opacity-0"
                } w-1/2  duration-500 transition-all  border-b-2 border-white 	 py-3`}
                onClick={() => setChat(0)}
              >
                {" "}
                Personal
              </button>
              <button
                className={`${
                  chat == 1 ? " border-opacity-100" : "border-opacity-0"
                } w-1/2  duration-500 transition-all  border-b-2 border-white 	 py-3`}
                onClick={() => setChat(1)}
              >
                {" "}
                Group
              </button>
            </nav>
            <section className=" border-r h-[calc(100%-125px)] overflow-y-scroll border-white border-opacity-15 w-full ">
              {chat == 0 ? <PersonalChat /> : <GroupChat />}
            </section>
          </section>
          <section className="h-full w-[calc(100%-400px)]">
            <Suspense fallback={<>Loading...</>}>
              <Outlet />
            </Suspense>
          </section>
        </main>
      </>
    </>
  );
};

export default AppLayout()(Inbox);
