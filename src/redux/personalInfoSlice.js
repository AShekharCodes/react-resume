import { createSlice } from "@reduxjs/toolkit";

const personalInfo = {
  profileimage: "",
  firstname: "",
  lastname: "",
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
    addPersonalInfo: (state, action) => {
      state.value = action.payload;
    },
    resetPersonalInfo: (state) => {
      state.value = personalInfo;
    },
    addImg: (state, action) => {
      state.value.profileimage = action.payload;
    },
    removeImg: (state) => {
      state.value.profileimage = "";
    },
  },
});

export const { addPersonalInfo, resetPersonalInfo, addImg, removeImg } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
