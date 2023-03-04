import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { setTemplateId } from "../redux/templateSlice";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import template1 from "../images/Template1.png";
import template2 from "../images/Template2.png";
import template3 from "../images/Template3.png";
import template4 from "../images/Template4.png";
import "../styles/Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fillDetails = (templateId) => {
    sessionStorage.clear();
    dispatch(setTemplateId(templateId));
    sessionStorage.setItem("templateId", templateId);
    console.log(templateId);
    navigate("/details");
    window.location.reload();
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
        <Grid className="grid-item" item xs={12} sm={6} md={4} lg={3}>
          <div className="template-btn-container">
            <img src={template1} className="template" alt="Template" />
            <button
              className="template-btn"
              onClick={() => fillDetails("#Template1")}
            >
              Use Template
            </button>
          </div>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6} md={4} lg={3}>
          <div className="template-btn-container">
            <img src={template2} className="template" alt="Template" />
            <button
              className="template-btn"
              onClick={() => fillDetails("#Template2")}
            >
              Use Template
            </button>
          </div>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6} md={4} lg={3}>
          <div className="template-btn-container">
            <img src={template3} className="template" alt="Template" />
            <button
              className="template-btn"
              onClick={() => fillDetails("#Template3")}
            >
              Use Template
            </button>
          </div>
        </Grid>
        <Grid className="grid-item" item xs={12} sm={6} md={4} lg={3}>
          <div className="template-btn-container">
            <img src={template4} className="template" alt="Template" />
            <button
              className="template-btn"
              onClick={() => fillDetails("#Template4")}
            >
              Use Template
            </button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
