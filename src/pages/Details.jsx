import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Navigationtabs from "../components/Navigationtabs";
import Personalinfo from "../components/Personalinfo";
import Workexperience from "../components/Workexperience";
import Education from "../components/Education";
import Keyskills from "../components/Keyskills";
import { Grid } from "@mui/material";
import "../styles/Details.css";

const Details = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNext = () => {
    setActiveTab(activeTab + 1);
  };

  const handleBack = () => {
    setActiveTab(activeTab - 1);
  };

  return (
    <>
      <Navbar />
      <Grid className="details-grid" container spacing={0}>
        <Grid item className="tabs-grid" xs={12} sm={4} md={4} lg={4}>
          <div className="tabs">
            <Navigationtabs
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </div>
        </Grid>

        <Grid item className="component-grid" xs={12} sm={8} md={8} lg={8}>
          <div className="component">
            {activeTab === 1 && <Personalinfo onNext={handleNext} />}
            {activeTab === 2 && (
              <Workexperience onNext={handleNext} onBack={handleBack} />
            )}
            {activeTab === 3 && (
              <Education onNext={handleNext} onBack={handleBack} />
            )}
            {activeTab === 4 && <Keyskills onBack={handleBack} />}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
