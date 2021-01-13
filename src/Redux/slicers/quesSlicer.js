import { createSlice } from "@reduxjs/toolkit";

const quesSlicer = createSlice({
  name: "Test List",
  initialState: {
    ques: [],
  },
  reducers: {
    ques(state, action) {
      let { ques } = action.payload;
      state.ques = ques;
    },
  },
});

export const { reducer, actions } = quesSlicer;
