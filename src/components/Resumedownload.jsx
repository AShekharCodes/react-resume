import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setActiveTab } from "../redux/tabsSlice";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
import CheckCircleOutlineTwoToneIcon from "@mui/icons-material/CheckCircleOutlineTwoTone";
import jsPDF from "jspdf";
import "../styles/Resumedownload.css";

const Resumedownload = () => {
  const templateId = useSelector((state) => state.template.templateId);
  // retrieving templateid from sessionstorage
  const templateIdStorage = sessionStorage.getItem("templateId");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // download button function
  const download = () => {
    var doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });
    // getting template id from redux or sessionstorage
    var source = document.querySelector(templateId || templateIdStorage);
    doc.html(source, {
      callback: function (pdf) {
        var pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        let regex = /^[a-zA-Z\d\s]+$/;
        // checks input for entering filename
        if (!regex.test(fileName)) {
          setSnackbarOpen(true);
          return;
        }
        pdf.save(`${fileName}.pdf`);
        // converts pdf file for saving to sessionstorage
        const pdfData = pdf.output("datauristring");

        // functionality of displaying success message after successfully downloading resume and redirecting to homepage after clearing sessionstorage
        setTimeout(() => {
          var messageBox = document.querySelector(".alert-box");
          messageBox.style.visibility = "visible";
          setTimeout(() => {
            // clear session storage and setting the converted pdf file in it
            sessionStorage.clear();
            sessionStorage.setItem("resume", pdfData);
            // Redirect to homepage
            window.location.replace("/");
          }, 1500);
        }, 1500);
      },
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  // back button functionality to go back to details filling form from preview
  const handleBack = () => {
    navigate("/details");
    dispatch(setActiveTab(4));
  };
  return (
    <>
      {/* input for entering filename */}
      <Typography className="save-label">Enter File Name</Typography>
      <TextField
        fullWidth
        size="small"
        type="text"
        // sets filename to whatever user enters
        onChange={(event) => {
          setFileName(event.target.value);
        }}
      />
      {/* back and save button */}
      <div className="back-save">
        <Button
          onClick={handleBack}
          variant="outlined"
          sx={{
            fontFamily: "Poppins, sans-serif",
            textTransform: "capitalize",
            fontSize: "13px",
            padding: "6px 32px",
            fontWeight: "bold",
            border: " 2px solid #1976D2",
            ":hover": { border: "2px solid #1976D2", boxShadow: "none" },
            boxShadow: "none",
          }}
        >
          Back
        </Button>
        <Button
          onClick={download}
          variant="contained"
          sx={{
            fontFamily: "Poppins, sans-serif",
            textTransform: "capitalize",
            fontSize: "13px",
            padding: "6px 31px",
            fontWeight: "bold",
            border: " 2px solid #1976D2",
            ":hover": { border: "2px solid #1976D2", boxShadow: "none" },
            boxShadow: "none",
          }}
        >
          Save
        </Button>
      </div>
      {/* success message dialog box */}
      <div className="alert-box">
        <div className="alert-content">
          <CheckCircleOutlineTwoToneIcon
            sx={{
              textAlign: "center",
              color: "rgb(44, 109, 230)",
              width: "45px",
              height: "45px",
            }}
          />

          <div className="alert-message">
            Your Resume has been Successfully Saved
          </div>
        </div>
      </div>
      {/* snackbar that pops up if entered filename isnt valid */}
      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={5000}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please enter a valid file name!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Resumedownload;
