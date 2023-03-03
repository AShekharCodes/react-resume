import { createSlice } from "@reduxjs/toolkit";

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

export const { addEducationInfo, resetEducationInfo } = educationSlice.actions;
export default educationSlice.reducer;
