import { createSlice } from "@reduxjs/toolkit";

const educationInfo = {
  type1: "UG",
  university1: "Bharati Vidyapeeth",
  degree1: "BCA",
  score1: "8.14",
  startyear1: "2019",
  endyear1: "2022",
  type2: "PG",
  university2: "Bharati Vidyapeeth",
  degree2: "MCA",
  score2: "8.14",
  startyear2: "2023",
  endyear2: "2023",
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
