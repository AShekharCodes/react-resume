import { createSlice } from "@reduxjs/toolkit";

// initial values for education data
const educationInfo = {
  type1: "",
  university1: "",
  degree1: "",
  score1: "",
  startyear1: "",
  endyear1: "",
  type2: "",
  university2: "",
  degree2: "",
  score2: "",
  startyear2: "",
  endyear2: "",
};

// reducer and actions
const educationSlice = createSlice({
  name: "educationInfo",
  initialState: { value: educationInfo },
  reducers: {
    addEducationInfo: (state, action) => {
      state.value = action.payload;
    },
    resetEducationInfo: (state) => {
      state.value = educationInfo;
    },
  },
});

// exporting reducers and actions
export const { addEducationInfo, resetEducationInfo } = educationSlice.actions;
export default educationSlice.reducer;
