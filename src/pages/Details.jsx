import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../redux/tabsSlice";
import Navbar from "../components/Navbar";
import Navigationtabs from "../components/Navigationtabs";
import Personalinfo from "../components/Personalinfo";
import Workexperience from "../components/Workexperience";
import Education from "../components/Education";
import Keyskills from "../components/Keyskills";
import { Grid } from "@mui/material";
import "../styles/Details.css";

const Details = () => {
  const dispatch = useDispatch();

  // below 3 functions are for setting validation to true for forms
  const handlePersonalValidation = () => {
    sessionStorage.setItem("personalValidated", true);
  };

  const handleExperienceValidation = () => {
    sessionStorage.setItem("experienceValidated", true);
  };

  const handleEducationValidation = () => {
    sessionStorage.setItem("educationValidated", true);
  };

  // retrieving values from sessionstorage and setting a final validation value based on them
  const personalValid = sessionStorage.getItem("personalValidated");
  const experienceValid = sessionStorage.getItem("experienceValidated");
  const educationValid = sessionStorage.getItem("educationValidated");

  if (personalValid && experienceValid && educationValid) {
    sessionStorage.setItem("allValidated", true);
  }

  const activeTab =
    useSelector((state) => state.tabs.activeTab) ||
    Number(sessionStorage.getItem("tab"));

  // function when user clicks on tab
  const handleTabChange = (tab) => {
    dispatch(setActiveTab(tab));
    sessionStorage.setItem("tab", tab);
  };

  // function to increment tab state by 1 to move to next form
  const handleNext = () => {
    dispatch(setActiveTab(activeTab + 1));
    sessionStorage.setItem("tab", activeTab + 1);
  };

  // function to decrement tab state by 1 to move to previous form
  const handleBack = () => {
    dispatch(setActiveTab(activeTab - 1));
    sessionStorage.setItem("tab", activeTab - 1);
  };

  return (
    <>
      <Navbar />
      <Grid className="details-grid" container spacing={0}>
        <Grid item className="tabs-grid" xs={12} sm={4} md={4} lg={4}>
          <div className="tabs">
            {/* navigation tab component */}
            <Navigationtabs
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </div>
        </Grid>

        <Grid item className="component-grid" xs={12} sm={8} md={8} lg={8}>
          <div className="component">
            {/* detail filling forms are rendered based on the state of tab retrieved from either redux or sessionstorage */}
            {activeTab === 1 && (
              <Personalinfo
                onNext={handleNext}
                validated={handlePersonalValidation}
              />
            )}
            {activeTab === 2 && (
              <Workexperience
                onNext={handleNext}
                onBack={handleBack}
                validated={handleExperienceValidation}
              />
            )}
            {activeTab === 3 && (
              <Education
                onNext={handleNext}
                onBack={handleBack}
                validated={handleEducationValidation}
              />
            )}
            {activeTab === 4 && <Keyskills onBack={handleBack} />}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
