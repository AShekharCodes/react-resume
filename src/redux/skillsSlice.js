import { createSlice } from "@reduxjs/toolkit";

const skillsInfo = {
  skill1: "",
  skill2: "",
  skill3: "",
  skill4: "",
  skill5: "",
  skill6: "",
  skill7: "",
  skill8: "",
};

const skillsSlice = createSlice({
  name: "skillsInfo",
  initialState: { value: skillsInfo },
  reducers: {
    addSkillInfo: (state, action) => {
      state.value = action.payload;
    },
    resetSkillInfo: (state) => {
      state.value = skillsInfo;
    },
  },
});

export const { addSkillInfo, resetSkillInfo } = skillsSlice.actions;
export default skillsSlice.reducer;
