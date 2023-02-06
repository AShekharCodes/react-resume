import React from "react";
import Navbar from "../components/common/Navbar";
import { Typography, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import logo from "../images/resume_template.png";
import "../styling/Homepage.css";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ margin: "0px 40px" }}>
        <Typography variant="h4">Templates</Typography>
        <Typography variant="h6" sx={{ fontSize: "15px", marginTop: "7px" }}>
          Select a Template to get Started
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            marginTop: "40px",
          }}
        >
          <Grid container spacing={3}>
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
                <img src={logo} className="logo" alt="logo" />
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
                <img src={logo} className="logo" alt="logo" />
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
                <img src={logo} className="logo" alt="logo" />
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
                <img src={logo} className="logo" alt="logo" />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
