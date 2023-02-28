import { createSlice } from "@reduxjs/toolkit";

const templateSlice = createSlice({
  name: "template",
  initialState: { templateId: "" },
  reducers: {
    setTemplateId: (state, action) => {
      state.templateId = action.payload;
    },
  },
});

export const { setTemplateId } = templateSlice.actions;
export default templateSlice.reducer;
