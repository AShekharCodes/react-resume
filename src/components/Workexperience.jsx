import React, { useState, useEffect } from "react";
import Inputcomponent from "./Inputcomponent";
import Dropdowncomponent from "./Dropdowncomponent";
import { useSelector, useDispatch } from "react-redux";
import { addInfo, resetInfo } from "../redux/personalInfoSlice";
import { Paper, Grid, Button, Snackbar, Alert } from "@mui/material";
import "../styles/Workexperience.css";

const Workexperience = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const workExperience = useSelector((state) => state.workExperience.value);
  const [state, setState] = useState(workExperience);
  const [moreExperience, setMoreExperience] = useState(1);

  const addExperience = () => {
    setMoreExperience(2);
  };

  const removeExperience = () => {
    setMoreExperience(1);
  };

  const reset = () => {
    setState({
      jobtitle1: "",
      organisation1: "",
      startyear1: "",
      endyear1: "",
      jobtitle2: "",
      organisation2: "",
      startyear2: "",
      endyear2: "",
    });
    dispatch(resetInfo());
    localStorage.removeItem("workExperience");
  };
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = {
      jobtitle1: data.get("jobtitle1") || "",
      organisation1: data.get("organisation1") || "",
      startyear1: data.get("startyear1") || "",
      endyear1: data.get("endyear1") || "",
      jobtitle2: data.get("jobtitle2") || "",
      organisation2: data.get("organisation2") || "",
      startyear2: data.get("startyear2") || "",
      endyear2: data.get("endyear2") || "",
    };

    // Validate form fields
    const isFormValid =
      formData.jobtitle1 &&
      formData.organisation1 &&
      formData.startyear1 &&
      formData.endyear1;

    if (!isFormValid) {
      setSnackbarOpen(true);
      return;
    }
    dispatch(addInfo(formData));
    localStorage.setItem("workExperience", JSON.stringify(formData));
    console.log(formData);
    onNext();
  };

  useEffect(() => {
    // Load from localStorage
    const savedPersonalInfo = localStorage.getItem("workExperience");
    if (savedPersonalInfo) {
      const parsedPersonalInfo = JSON.parse(savedPersonalInfo);
      dispatch(addInfo(parsedPersonalInfo));
      setState(parsedPersonalInfo);
    }
  }, [dispatch]);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Paper component="form" onSubmit={handleSubmit} elevation={3}>
        <Grid className="grid" container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="header">Work Experience</div>
          </Grid>
          <hr className="top-line" />
          {[...Array(moreExperience)].map((_, i) => (
            <React.Fragment key={i + 1}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="sub-header">{`Experience ${i + 1}`}</div>
              </Grid>
              <hr className="top-line" />
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  type="text"
                  name={`jobtitle${i + 1}`}
                  label="Job Title"
                  id={`job-title-${i + 1}`}
                  onChange={handleChange}
                  value={state[`jobtitle${i + 1}`]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  type="text"
                  name={`organisation${i + 1}`}
                  label="Organisation Name"
                  id={`organisation-name-${i + 1}`}
                  onChange={handleChange}
                  value={state[`organisation${i + 1}`]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Dropdowncomponent
                  label="Start Year"
                  name={`startyear${i + 1}`}
                  id={`start-year-${i + 1}`}
                  value={state[`startyear${i + 1}`]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Dropdowncomponent
                  label="End Year"
                  name={`endyear${i + 1}`}
                  id={`end-year-${i + 1}`}
                  value={state[`endyear${i + 1}`]}
                  onChange={handleChange}
                />
              </Grid>
              <hr />
            </React.Fragment>
          ))}
          <Grid item xs={12} sm={12} ms={12} lg={12}>
            {moreExperience === 1 && (
              <div className="add-remove-btn">
                <Button
                  onClick={addExperience}
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    textTransform: "capitalize",
                    fontSize: "13.5px",
                    fontWeight: "bold",
                  }}
                >
                  Add new
                </Button>
              </div>
            )}
            {moreExperience === 2 && (
              <Grid item xs={12} sm={12} ms={12} lg={12}>
                <div className="add-remove-btn">
                  <Button
                    onClick={removeExperience}
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      textTransform: "capitalize",
                      fontSize: "13.5px",
                      fontWeight: "bold",
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </Grid>
            )}
          </Grid>

          <hr />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="back-next-btn">
              <Button
                variant="outlined"
                onClick={onBack}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  padding: "7px 35px",
                  fontWeight: "bold",
                  border: " 2px solid #1976D2",
                  ":hover": { border: "2px solid #1976D2", boxShadow: "none" },
                  boxShadow: "none",
                }}
              >
                Back
              </Button>
              <Button
                onClick={reset}
                variant="outlined"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "red",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  padding: "7px 33px",
                  fontWeight: "bold",
                  border: " 2px solid red",
                  ":hover": { border: "2px solid red", boxShadow: "none" },
                  boxShadow: "none",
                }}
              >
                Reset
              </Button>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "12px",
                  padding: "7px 36px",
                  fontWeight: "bold",
                  border: " 2px solid #1976D2",
                  ":hover": { border: "2px solid #1976D2", boxShadow: "none" },
                  boxShadow: "none",
                }}
              >
                Next
              </Button>
            </div>
          </Grid>
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
              Please fill all the fields!
            </Alert>
          </Snackbar>
        </Grid>
      </Paper>
    </>
  );
};

export default Workexperience;
