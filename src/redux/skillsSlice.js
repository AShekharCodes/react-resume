import { createSlice } from "@reduxjs/toolkit";

const skillsInfo = {
  skill1: "React js",
  skill2: "Mongo DB",
  skill3: "Javascript",
  skill4: "HTML",
  skill5: "Web development",
  skill6: "CSS",
  skill7: "Node js",
  skill8: "Express js",
};

const skillsSlice = createSlice({
  name: "skillsInfo",
  initialState: { value: skillsInfo },
  reducers: {
    addInfo: (state, action) => {
      state.value = action.payload;
    },
    resetInfo: (state) => {
      state.value = skillsInfo;
    },
  },
});

export const { addInfo, resetInfo } = skillsSlice.actions;
export default skillsSlice.reducer;
