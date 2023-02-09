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
        <Grid
          item
          className="tabs"
          xs={12}
          sm={4}
          md={4}
          lg={3}
          sx={{ border: "1px solid black", margin: "0" }}
        >
          Tabs here
        </Grid>
        <Grid item className="paper" xs={12} sm={8} md={8} lg={9}>
          <Paper elevation={1} sx={{ textAlign: "center", margin: "0" }}>
            Paper Here
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
