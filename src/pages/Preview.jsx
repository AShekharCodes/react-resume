import React from "react";
import Navbar from "../components/Navbar";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import Template4 from "../templates/Template4";
import Resumedownload from "../components/Resumedownload";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import "../styles/Preview.css";

const Preview = () => {
  // retrieving template id from sessionstorage and redux store
  const templateId = useSelector((state) => state.template.templateId);
  const templateIdStorage = sessionStorage.getItem("templateId");
  return (
    <>
      <Navbar />
      <Grid
        className="grid"
        container
        spacing={0}
        sx={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Poppins, sans-serif",
              marginBottom: "20px",
              fontWeight: "bold",
              padding: "0px 10px",
            }}
          >
            {/* header */}
            Resume Preview
          </Typography>
        </Grid>
        <Grid item className="preview-component" xs={12} sm={12} md={9} lg={9}>
          <div className="preview-div">
            {/* conditionally displaying template based on template id */}
            {(templateId || templateIdStorage) === "#Template1" && (
              <Template1 />
            )}
            {(templateId || templateIdStorage) === "#Template2" && (
              <Template2 />
            )}
            {(templateId || templateIdStorage) === "#Template3" && (
              <Template3 />
            )}
            {(templateId || templateIdStorage) === "#Template4" && (
              <Template4 />
            )}
          </div>
        </Grid>
        {/* save resume component containing input field to enter file name */}
        <Grid item className="save-component" xs={12} sm={12} md={3} lg={3}>
          <div className="save-div">
            <Resumedownload />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Preview;
