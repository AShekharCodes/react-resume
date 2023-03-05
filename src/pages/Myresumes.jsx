import React from "react";
import Navbar from "../components/Navbar";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { Typography } from "@mui/material";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "../styles/Myresume.css";

const Myresumes = () => {
  // retrieving resume pdf file from sessionstorage
  const pdf = sessionStorage.getItem("resume");
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* displaying conditionally if pdf file is present */}
        {pdf ? (
          <div className="my-resume">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl={pdf} defaultScale={0.7} />
            </Worker>
          </div>
        ) : (
          <div className="no-resume">Create a resume to display here!</div>
        )}

        <div className="footer">
          <Typography style={{ fontFamily: "Poppins" }}>
            Note: For now, this is the best possible implementation from my side
            of viewing every resume that is created by user in a single browser
            session. Right now, it is only limited to one resume, and only the
            latest created resume can be viewed. Improvements in the overall app
            will be done in future .
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Myresumes;
