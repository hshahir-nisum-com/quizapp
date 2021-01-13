import { createSlice } from "@reduxjs/toolkit";

const testListSlicer = createSlice({
  name: "Test List",
  initialState: {
    testList: [],
    keys: [],
  },
  reducers: {
    tests(state, action) {
      state.testList.push(action.payload);
    },
    keys(state, action) {
      state.keys.push(action.payload);
    },
  },
});

export const { reducer, actions } = testListSlicer;
