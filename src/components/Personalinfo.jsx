import React from "react";
import { Paper, Grid } from "@mui/material";
import Inputcomponent from "./Inputcomponent";
import "../styling/Personalinfo.css";

const Personalinfo = () => {
  return (
    <>
      <Paper elevation={3}>
        <Grid className="grid" container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="header">Personal Details</div>
          </Grid>
          <hr className="hr1" />
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent type="text" label="First name" id="first-name" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent type="text" label="Last name" id="last-name" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent type="email" label="Email" id="email" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              type="number"
              isKeyDown={true}
              label="Mobile"
              id="mobile"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Inputcomponent type="text" label="Address" id="address" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent type="text" label="City" id="city" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent type="text" label="State" id="state" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              type="number"
              isKeyDown={true}
              label="Postal code"
              id="postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Inputcomponent
              type="text"
              isMultiline={true}
              rows={5}
              limit={400}
              label="Objective"
              id="objective"
              placeholder="Max 400 characters"
            />
          </Grid>
          <hr className="hr2" />
        </Grid>
      </Paper>
    </>
  );
};

export default Personalinfo;
