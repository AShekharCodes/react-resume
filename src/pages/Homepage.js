import React from "react";
import Navbar from "../components/common/Navbar";
import { Typography, Box, Paper, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import template from "../images/resume_template.png";
import "../styling/Homepage.css";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ margin: "0px 40px" }}>
        <Typography variant="h4" align="center">
          Templates
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ fontSize: "15px", marginTop: "7px" }}
        >
          Select a Template to get Started
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            marginTop: "40px",
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} lg={3} md={6} sm={6}>
              <Paper
                elevation={0}
                sx={{
                  border: "none",
                  width: "100%",
                  height: "450px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <div className="container">
                  <img src={template} className="template" alt="Template" />
                  <Button className="btn">Use Template</Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3} md={6} sm={6}>
              <Paper
                elevation={0}
                sx={{
                  border: "none",
                  width: "100%",
                  height: "450px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <div className="container">
                  <img src={template} className="template" alt="Template" />
                  <Button className="btn">Use Template</Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3} md={6} sm={6}>
              <Paper
                elevation={0}
                sx={{
                  border: "none",
                  width: "100%",
                  height: "450px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <div className="container">
                  <img src={template} className="template" alt="Template" />
                  <Button className="btn">Use Template</Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} lg={3} md={6} sm={6}>
              <Paper
                elevation={0}
                sx={{
                  border: "none",
                  width: "100%",
                  height: "450px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <div className="container">
                  <img src={template} className="template" alt="Template" />
                  <Button className="btn">Use Template</Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
