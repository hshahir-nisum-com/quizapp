import { createSlice } from "@reduxjs/toolkit";

const loginSlicer = createSlice({
  name: "login",
  initialState: {
    userName: [],
    userPassword: [],
  },
  reducers: {
    uName(state, action) {
      state.userName.push(action.payload);
    },
    uPassword(state, action) {
      state.userPassword.push(action.payload);
    },
  },
});

export const { reducer, actions } = loginSlicer;
