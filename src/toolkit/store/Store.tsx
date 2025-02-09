import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./../reducers/UserSlice";
import socialSlice from "./../reducers/SocialSlice";
import dialogSlice from "./../reducers/DialogSlice";
import postSlice from "../reducers/PostSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    socialData: socialSlice,
    dialog: dialogSlice,
    posts: postSlice,
  },
});

export { store };
