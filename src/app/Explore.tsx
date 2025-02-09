import { useEffect } from "react";
import AppLayout from "../components/layouts/AppLayout";

import {
  useSetAllDialogCloseDispatcher,
  useSetPageNotInboxDispatcher,
} from "../hooks/dispatchHook";

const Explore = () => {
  const setAllDialogClose = useSetAllDialogCloseDispatcher();
  const setPageNotInbox = useSetPageNotInboxDispatcher();
  useEffect(() => {
    setPageNotInbox();
    setAllDialogClose();
  }, []);
  return <></>;
};

export default AppLayout()(Explore);
