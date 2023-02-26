import { createSlice } from "@reduxjs/toolkit";

const personalInfo = {
  profileimage: "",
  firstname: "Abhishek",
  lastname: "Shekhar",
  email: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  postalcode: "",
  objective: "",
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState: { value: personalInfo },
  reducers: {
    addInfo: (state, action) => {
      state.value = action.payload;
    },
    addImg: (state, action) => {
      state.value.profileimage = action.payload;
    },
    removeImg: (state) => {
      state.value.profileimage = "";
    },
    resetInfo: (state) => {
      state.value = personalInfo;
    },
  },
});

export const { addInfo, addImg, removeImg, resetInfo } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
