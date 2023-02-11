import React from "react";
import Navbar from "../components/common/Navbar";
import { Paper, Grid } from "@mui/material";
import "../styling/Details.css";

const Details = () => {
  return (
    <>
      <Navbar />
      <Grid
        className="details-grid"
        container
        spacing={0}
        sx={{ padding: "10px 20px" }}
      >
        <Grid item className="tabs-grid" xs={12} sm={4} md={4} lg={4}>
          <div className="tabs">Tabs here</div>
        </Grid>

        <Grid item className="paper-grid" xs={12} sm={8} md={8} lg={8}>
          <div className="paper">
            <Paper elevation={1}>Paper Here</Paper>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
