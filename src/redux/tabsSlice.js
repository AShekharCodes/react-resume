import { createSlice } from "@reduxjs/toolkit";

// tab reducer and action to set tab state
const tabsSlice = createSlice({
  name: "tabs",
  initialState: { activeTab: Number(sessionStorage.getItem("tab")) || 1 }, //either use default value of 1 or get it from sessionstorage that was set from details page
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

// exporting reducer and actions
export const { setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;
