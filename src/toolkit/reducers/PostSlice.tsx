import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [] as any[],
  },
  reducers: {
    postsSave: (state, action) => {
      state.posts = action.payload;
    },
    onePostSave: (
      state,
      action: {
        payload: any;
      }
    ) => {
      state.posts = [action.payload, ...state.posts];
    },
  },
});

export const { postsSave, onePostSave } = PostSlice.actions;
export default PostSlice.reducer;
