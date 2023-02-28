import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./tabsSlice";
import personalInfoReducer from "./personalInfoSlice";
import workExperienceReducer from "./workExperienceSlice";
import educationReducer from "./educationSlice";
import skillsReducer from "./skillsSlice";
import templateReducer from "./templateSlice";

const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    personalInfo: personalInfoReducer,
    workExperience: workExperienceReducer,
    education: educationReducer,
    skills: skillsReducer,
    template: templateReducer,
  },
});

export default store;
