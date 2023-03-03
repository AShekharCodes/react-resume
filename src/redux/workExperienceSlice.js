import { createSlice } from "@reduxjs/toolkit";

const experienceInfo = {
  jobtitle1: "",
  organisation1: "",
  startyear1: "",
  endyear1: "",
  jobtitle2: "",
  organisation2: "",
  startyear2: "",
  endyear2: "",
};

const workExperienceSlice = createSlice({
  name: "experienceInfo",
  initialState: { value: experienceInfo },
  reducers: {
    addExperienceInfo: (state, action) => {
      state.value = action.payload;
    },
    resetExperienceInfo: (state) => {
      state.value = experienceInfo;
    },
  },
});

export const { addExperienceInfo, resetExperienceInfo } =
  workExperienceSlice.actions;
export default workExperienceSlice.reducer;
