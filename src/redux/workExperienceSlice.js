import { createSlice } from "@reduxjs/toolkit";

const experienceInfo = {
  jobtitle1: "Frontend Developer",
  organisation1: "Summer Blues",
  startyear1: "2018",
  endyear1: "2019",
  jobtitle2: "React native developer",
  organisation2: "Deloitte",
  startyear2: "2018",
  endyear2: "2019",
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
