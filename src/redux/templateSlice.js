import { createSlice } from "@reduxjs/toolkit";

// template reducer and action to set template id in store
const templateSlice = createSlice({
  name: "template",
  initialState: { templateId: "" },
  reducers: {
    setTemplateId: (state, action) => {
      state.templateId = action.payload;
    },
  },
});

// exporting reducer and actions
export const { setTemplateId } = templateSlice.actions;
export default templateSlice.reducer;
