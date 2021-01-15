import { createSlice } from "@reduxjs/toolkit";

const testListSlicer = createSlice({
  name: "Test List",
  initialState: {
    testList: []
  },
  reducers: {
    tests(state, action) {
      console.log("PayLoad :",action.payload.data)
      state.testList = [...action.payload.data];
    }
  },
});

export const { reducer, actions } = testListSlicer;
