import { createSlice } from "@reduxjs/toolkit";

const testListSlicer = createSlice({
  name: "Test List",
  initialState: {
    testList: []
  },
  reducers: {
    tests(state, action) {
      console.log("PayLoad :",action.payload)
      state.testList = [...action.payload];
    }
  },
});

export const { reducer, actions } = testListSlicer;
