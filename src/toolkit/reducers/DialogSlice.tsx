import { createSlice } from "@reduxjs/toolkit";

const DialogSlice = createSlice({
  name: "dialog",
  initialState: {
    page: {
      inbox: false,
    },
    isAsideOpen: true,
    isNotificationOpen: false,
    isSearchOpen: false,
    isCreateOpen: false,
  },
  reducers: {
    setAllDialogClose: (state) => {
      if (state.page.inbox) {
        state.isAsideOpen = false;
      } else {
        state.isAsideOpen = true;
      }
      state.isNotificationOpen = false;
      state.isSearchOpen = false;
      state.isCreateOpen = false;
    },

    toggleSearchOpen: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
      state.isNotificationOpen = false;
      state.isAsideOpen = false;
      state.isCreateOpen = false;
    },
    toggleNotificationOpen: (state) => {
      state.isNotificationOpen = !state.isNotificationOpen;
      state.isAsideOpen = false;
      state.isSearchOpen = false;
      state.isCreateOpen = false;
    },
    toggleCreateOpen: (state) => {
      state.isCreateOpen = !state.isCreateOpen;
    },

    setPageInbox: (state) => {
      state.page.inbox = true;
    },
    setPageNotInbox: (state) => {
      state.page.inbox = false;
    },
  },
});

export const {
  setAllDialogClose,
  toggleSearchOpen,
  toggleNotificationOpen,
  toggleCreateOpen,
  setPageInbox,
  setPageNotInbox,
} = DialogSlice.actions;

export default DialogSlice.reducer;
