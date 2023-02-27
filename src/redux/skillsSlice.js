import { createSlice } from "@reduxjs/toolkit";

const skillsInfo = {
  skill1: "React js",
  skill2: "Mongo DB",
  skill3: "Javascript",
  skill4: "Automation",
  skill5: "Web development",
  skill6: "Mobile Development",
  skill7: "Java spring boot",
  skill8: "Kubernetes",
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
