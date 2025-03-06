import { useDispatch } from "react-redux";
import { UnknownAction } from "@reduxjs/toolkit";

import { login, logout } from "../toolkit/reducers/UserSlice";
import { closeAside, openAside } from "../toolkit/reducers/AsideSlice";

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

//aside
const useOpenAside = useDispatchHook(openAside);
const useCloseAside = useDispatchHook(closeAside);

export { useLoginDispatcher, useLogoutDispatcher, useOpenAside, useCloseAside };
