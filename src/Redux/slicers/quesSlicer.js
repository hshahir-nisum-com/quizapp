import { createSlice } from "@reduxjs/toolkit";

const quesSlicer = createSlice({
  name: "Test List",
  initialState: {
    ques: [],
  },
  reducers: {
    ques(state, action) {
      console.log("ques :", action.payload)
      state.ques = action.payload;
    },
  },
});

export const { reducer, actions } = quesSlicer;
