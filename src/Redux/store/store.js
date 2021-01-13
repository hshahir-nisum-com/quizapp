import { configureStore } from "@reduxjs/toolkit";
import reducer   from "../slicers/combineSlicer";


const store = configureStore({
  reducer: reducer,
});

export default store;