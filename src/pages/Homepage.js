import React from "react";
import Navbar from "../components/common/Navbar";
import { Typography, Box } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ margin: "0px 40px" }}>
        <Typography variant="h4">Templates</Typography>
        <Typography variant="h6" sx={{ fontSize: "15px", marginTop: "7px" }}>
          Select a Template to get Started
        </Typography>
      </Box>
    </>
  );
};

export default Homepage;
