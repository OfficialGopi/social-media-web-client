import { useEffect } from "react";
import AppLayout from "../components/layouts/AppLayout";
import {
  useSetAllDialogCloseDispatcher,
  useSetPageNotInboxDispatcher,
} from "../hooks/dispatchHook";

const Reels = () => {
  const setAllDialogClose = useSetAllDialogCloseDispatcher();
  const setPageNotInbox = useSetPageNotInboxDispatcher();
  useEffect(() => {
    setPageNotInbox();
    setAllDialogClose();
  }, []);
  return <div>Reels</div>;
};

export default AppLayout()(Reels);
