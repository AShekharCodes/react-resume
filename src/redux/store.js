import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./tabsSlice";
import personalInfoReducer from "./personalInfoSlice";
import workExperienceReducer from "./workExperienceSlice";
import educationReducer from "./educationSlice";
import skillsReducer from "./skillsSlice";

const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    personalInfo: personalInfoReducer,
    workExperience: workExperienceReducer,
    education: educationReducer,
    skills: skillsReducer,
  },
});

export default store;
