import React from "react";
import Navbar from "../components/common/Navbar";
import Personalinfo from "../components/Personalinfo";
import Navigationtabs from "../components/Navigationtabs";
import { Grid } from "@mui/material";
import "../styling/Details.css";

const Details = () => {
  return (
    <>
      <Navbar />
      <Grid className="details-grid" container spacing={0}>
        <Grid item className="tabs-grid" xs={12} sm={4} md={4} lg={4}>
          <div className="tabs">
            <Navigationtabs />
          </div>
        </Grid>

        <Grid item className="component-grid" xs={12} sm={8} md={8} lg={8}>
          <div className="component">
            <Personalinfo />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
