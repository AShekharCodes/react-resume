import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./tabsSlice";

const store = configureStore({
  reducer: {
    tabs: tabsReducer,
  },
});

export default store;
