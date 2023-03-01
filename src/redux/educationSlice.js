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
    addInfo: (state, action) => {
      state.value = action.payload;
    },
    resetInfo: (state) => {
      state.value = educationInfo;
    },
  },
});

export const { addInfo, resetInfo } = educationSlice.actions;
export default educationSlice.reducer;
