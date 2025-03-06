import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./../reducers/UserSlice";
import AsideSlice from "./../reducers/AsideSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    aside: AsideSlice,
  },
});

export { store };
