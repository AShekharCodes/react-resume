import { createSlice } from "@reduxjs/toolkit";

const tabsSlice = createSlice({
  name: "tabs",
  initialState: { activeTab: Number(sessionStorage.getItem("tab")) || 1 },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;
