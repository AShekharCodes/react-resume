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
  const [selectedTab, setSelectedTab] = useState(1);

  const tabSelect = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <Navbar />
      <Grid className="details-grid" container spacing={0}>
        <Grid item className="tabs-grid" xs={12} sm={4} md={4} lg={4}>
          <div className="tabs">
            <Navigationtabs onTabSelect={tabSelect} />
          </div>
        </Grid>

        <Grid item className="component-grid" xs={12} sm={8} md={8} lg={8}>
          <div className="component">
            {selectedTab === 1 && <Personalinfo />}
            {selectedTab === 2 && <Workexperience />}
            {selectedTab === 3 && <Education />}
            {selectedTab === 4 && <Keyskills />}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
