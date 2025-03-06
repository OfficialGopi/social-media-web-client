import { createSlice } from "@reduxjs/toolkit";

const AsideSlice = createSlice({
  name: "aside",
  initialState: {
    isOpen: true as boolean,
  },
  reducers: {
    openAside: (state) => {
      state.isOpen = true;
    },
    closeAside: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openAside, closeAside } = AsideSlice.actions;
export default AsideSlice.reducer;
