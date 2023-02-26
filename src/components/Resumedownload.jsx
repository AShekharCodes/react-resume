import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setActiveTab } from "../redux/tabsSlice";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Snackbar, Alert } from "@mui/material";
import jsPDF from "jspdf";
import "../styles/Resumedownload.css";

const Resumedownload = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fileName, setFileName] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const download = () => {
    var doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });
    var source = document.querySelector("#Template1");
    doc.html(source, {
      callback: function (pdf) {
        var pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        let regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(fileName)) {
          setSnackbarOpen(true);
          return;
        }
        pdf.save(`${fileName}.pdf`);
      },
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleBack = () => {
    navigate("/details");
    dispatch(setActiveTab(4));
  };
  return (
    <>
      <Typography className="save-label">Enter File Name</Typography>
      <TextField
        fullWidth
        size="small"
        type="text"
        onChange={(event) => {
          setFileName(event.target.value);
        }}
      />
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
