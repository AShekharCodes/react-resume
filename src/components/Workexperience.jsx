import React from "react";
import { Paper, Grid } from "@mui/material";
import "../styles/Workexperience.css";

const Workexperience = () => {
  return (
    <>
      <Paper elevation={3}>
        <Grid className="grid" container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="header">Work Experience</div>
          </Grid>
          <hr />
        </Grid>
      </Paper>
    </>
  );
};

export default Workexperience;
