import { createSlice } from "@reduxjs/toolkit";

const SocialSlice = createSlice({
  name: "socialData",
  initialState: {
    totalFollowersCount: null,
    totalFollowingCount: null,
    followers: [] as any[],
    followings: [] as any[],
  },
  reducers: {},
});

export const {} = SocialSlice.actions;
export default SocialSlice.reducer;
