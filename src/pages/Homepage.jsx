import React from "react";
import Navbar from "../components/common/Navbar";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import template from "../images/resume_template.png";
import "../styles/Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const fillDetails = () => {
    navigate("/details");
  };

  return (
    <>
      <Navbar />
      <Box sx={{ padding: "10px 0px" }}>
        <Typography
          variant="h4"
          align="center"
          fontFamily="Poppins, sans-serif"
        >
          Templates
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontSize: "15px",
            marginTop: "7px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Select a Template to get Started
        </Typography>
      </Box>
      <Grid className="template-grid" container spacing={0}>
        {[...Array(4)].map((_, i) => (
          <Grid
            key={i}
            className="grid-item"
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ marginBottom: "50px" }}
          >
            <div className="template-btn-container">
              <img src={template} className="template" alt="Template" />
              <button className="template-btn" onClick={fillDetails}>
                Use Template
              </button>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Homepage;
