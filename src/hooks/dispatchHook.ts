import { useDispatch } from "react-redux";
import { login, logout } from "../toolkit/reducers/UserSlice";
import {
  setAllDialogClose,
  toggleCreateOpen,
  toggleNotificationOpen,
  setPageInbox,
  setPageNotInbox,
  toggleSearchOpen,
} from "../toolkit/reducers/DialogSlice";
import { onePostSave, postsSave } from "../toolkit/reducers/PostSlice";
import { UnknownAction } from "@reduxjs/toolkit";

//useDispatchHook
const useDispatchHook = (func: (payload?: void) => UnknownAction) => () => {
  const dispatch = useDispatch();
  return (payload = null) => {
    if (payload) dispatch(func(payload));
    else dispatch(func());
  };
};

//user
const useLoginDispatcher = useDispatchHook(login);
const useLogoutDispatcher = useDispatchHook(logout);

//dialog
const useSetAllDialogCloseDispatcher = useDispatchHook(setAllDialogClose);
const useToggleSearchOpenDispatcher = useDispatchHook(toggleSearchOpen);
const useToggleNotificationOpenDispatcher = useDispatchHook(
  toggleNotificationOpen
);
const useToggleCreateOpenDispatcher = useDispatchHook(toggleCreateOpen);
const useSetPageInboxDispatcher = useDispatchHook(setPageInbox);
const useSetPageNotInboxDispatcher = useDispatchHook(setPageNotInbox);

//post
const useSavePostsDispatcher = useDispatchHook(postsSave);
const useSaveOnePostDispatcher = useDispatchHook(onePostSave);

export {
  useLoginDispatcher,
  useLogoutDispatcher,
  useSetAllDialogCloseDispatcher,
  useToggleSearchOpenDispatcher,
  useToggleNotificationOpenDispatcher,
  useToggleCreateOpenDispatcher,
  useSetPageInboxDispatcher,
  useSetPageNotInboxDispatcher,
  useSavePostsDispatcher,
  useSaveOnePostDispatcher,
};
