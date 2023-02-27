import React, { useState, useEffect } from "react";
import Inputcomponent from "./Inputcomponent";
import Dropdowncomponent from "./Dropdowncomponent";
import { useSelector, useDispatch } from "react-redux";
import { addInfo, resetInfo } from "../redux/educationSlice";
import { Paper, Grid, Button, Snackbar, Alert } from "@mui/material";
import "../styles/Education.css";

const Education = ({ onNext, onBack }) => {
  const [moreEducation, setMoreEducation] = useState(1);
  const dispatch = useDispatch();
  const education = useSelector((state) => state.education.value);
  const [state, setState] = useState(education);

  const addEducation = () => {
    setMoreEducation(2);
  };

  const removeEducation = () => {
    setMoreEducation(1);
  };

  const reset = () => {
    setState({
      type1: "",
      university1: "",
      degree1: "",
      score1: "",
      startyear1: "",
      endyear1: "",
      type2: "",
      university2: "",
      degree2: "",
      score2: "",
      startyear2: "",
      endyear2: "",
    });
    dispatch(resetInfo());
    localStorage.removeItem("education");
  };
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = {
      type1: data.get("type1"),
      university1: data.get("university1"),
      degree1: data.get("degree1"),
      score1: data.get("score1"),
      startyear1: data.get("startyear1"),
      endyear1: data.get("endyear1"),
      type2: data.get("type2"),
      university2: data.get("university2"),
      degree2: data.get("degree2"),
      score2: data.get("score2"),
      startyear2: data.get("startyear2"),
      endyear2: data.get("endyear2"),
    };

    // Validate form fields
    const isFormValid =
      state.type1 &&
      state.university1 &&
      state.degree1 &&
      state.score1 &&
      state.startyear1 &&
      state.endyear1;

    if (!isFormValid) {
      setSnackbarOpen(true);
      return;
    }
    dispatch(addInfo(formData));
    localStorage.setItem("education", JSON.stringify(formData));
    console.log(formData);
    onNext();
  };

  useEffect(() => {
    // Load from localStorage
    const savedPersonalInfo = localStorage.getItem("education");
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
            <div className="header">Education Details</div>
          </Grid>
          <hr className="top-line" />
          {[...Array(moreEducation)].map((_, i) => (
            <React.Fragment key={i + 1}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="sub-header">{`Details ${i + 1}`}</div>
              </Grid>
              <hr className="top-line" />
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  type="text"
                  label="Type"
                  name={`type${i + 1}`}
                  id={`type-${i + 1}`}
                  value={state[`type${i + 1}`]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  type="text"
                  name={`university${i + 1}`}
                  label="University"
                  id={`university-${i + 1}`}
                  value={state[`university${i + 1}`]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  type="text"
                  name={`degree${i + 1}`}
                  label="Degree"
                  id={`degree-${i + 1}`}
                  value={state[`degree${i + 1}`]}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  type="number"
                  name={`score${i + 1}`}
                  label="Percentage/Grade"
                  id={`score-${i + 1}`}
                  isKeyDown={true}
                  value={state[`score${i + 1}`]}
                  onChange={handleChange}
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
            {moreEducation === 1 && (
              <div className="add-remove-btn">
                <Button
                  onClick={addEducation}
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
            {moreEducation === 2 && (
              <Grid item xs={12} sm={12} ms={12} lg={12}>
                <div className="add-remove-btn">
                  <Button
                    onClick={removeEducation}
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
                variant="contained"
                type="submit"
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

export default Education;
