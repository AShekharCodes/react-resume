import { createSlice } from "@reduxjs/toolkit";

const experienceInfo = {
  jobtitle1: "Frontend Developer",
  organisation1: "AlmaBetter",
  startyear1: "2022",
  endyear1: "2023",
  jobtitle2: "Backend Developer",
  organisation2: "AlmaBetter",
  startyear2: "2022",
  endyear2: "2023",
};

const workExperienceSlice = createSlice({
  name: "experienceInfo",
  initialState: { value: experienceInfo },
  reducers: {
    addInfo: (state, action) => {
      state.value = action.payload;
    },
    resetInfo: (state) => {
      state.value = experienceInfo;
    },
  },
});

export const { addInfo, resetInfo } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;
