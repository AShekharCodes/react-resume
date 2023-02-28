import { createSlice } from "@reduxjs/toolkit";

const personalInfo = {
  profileimage: "",
  firstname: "Abhishek",
  lastname: "Shekhar",
  email: "abhishek123shekhar@gmail.com",
  mobile: "9654991140",
  address: "Gyan Khand-4, Indirapuram",
  city: "Ghaziabad",
  state: "Uttar Pradesh",
  postalcode: "201014",
  objective:
    "To learn about web development and become a successful frontend developer and deliver fruitful results to those whom I am working with.",
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
