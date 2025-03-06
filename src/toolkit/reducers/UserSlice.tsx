import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/toolkit.types";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: true as boolean,
    user: {
      _id: "12121221",
      username: "gopi",
      gmail: "gopi@gmail.com",
      firstName: "Gopi",
      dateOfBirth: new Date("2004-03-30"),
      bio: "Hi I am gopikanta Mondal",
      gender: "MALE",
      websites: ["google.com", "google.com"],
      isPrivate: false,
      profilePic: "https://picsum.photos/200/300",

      createdAt: new Date("2004-03-30"),
      updatedAt: new Date("2004-03-30"),
    } as IUser | null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
