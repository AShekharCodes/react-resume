import React, { useState, useEffect } from "react";
import Inputcomponent from "./Inputcomponent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInfo, resetInfo } from "../redux/educationSlice";
import { Paper, Grid, Button, Snackbar, Alert } from "@mui/material";
import "../styles/Keyskills.css";

const Keyskills = ({ onBack }) => {
  const [numInputs, setNumInputs] = useState(4);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills.value);
  const [state, setState] = useState(skills);

  const goToPreview = () => {
    navigate("/preview");
  };

  const addSkill = () => {
    if (numInputs < 8) {
      setNumInputs(numInputs + 1);
    }
  };

  const removeSkill = () => {
    if (numInputs > 4) {
      setNumInputs(numInputs - 1);
    }
  };

  const reset = () => {
    setState({
      skill1: "",
      skill2: "",
      skill3: "",
      skill4: "",
      skill5: "",
      skill6: "",
      skill7: "",
      skill8: "",
    });
    dispatch(resetInfo());
    localStorage.removeItem("skills");
  };
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = {
      skill1: data.get("skill1"),
      skill2: data.get("skill2"),
      skill3: data.get("skill3"),
      skill4: data.get("skill4"),
      skill5: data.get("skill5"),
      skill6: data.get("skill6"),
      skill7: data.get("skill7"),
      skill8: data.get("skill8"),
    };

    // Validate form fields
    const isFormValid =
      state.skill1 && state.skill2 && state.skill3 && state.skill4;

    if (!isFormValid) {
      setSnackbarOpen(true);
      return;
    }
    dispatch(addInfo(formData));
    localStorage.setItem("skills", JSON.stringify(formData));
    goToPreview();
    console.log(formData);
  };

  useEffect(() => {
    // Load from localStorage
    const savedPersonalInfo = localStorage.getItem("skills");
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
            <div className="header">Key Skills</div>
          </Grid>
          {[...Array(numInputs)].map((_, i) => (
            <Grid item key={i + 1} xs={12} sm={12} md={6} lg={6}>
              <Inputcomponent
                type="text"
                name={`skill${i + 1}`}
                value={state[`skill${i + 1}`]}
                label={`Skill ${i + 1}`}
                id={`skill-${i + 1}`}
                onChange={handleChange}
              />
            </Grid>
          ))}
          <hr />
          <Grid className="add-remove" item xs={12} sm={12} md={12} lg={12}>
            {numInputs < 8 && (
              <Button
                onClick={addSkill}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "13.5px",
                  fontWeight: "bold",
                }}
              >
                Add new
              </Button>
            )}
            {numInputs > 4 && (
              <Button
                onClick={removeSkill}
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "capitalize",
                  fontSize: "13.5px",
                  fontWeight: "bold",
                }}
              >
                Remove
              </Button>
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
                type="reset"
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
                  padding: "7px 26px",
                  fontWeight: "bold",
                  border: " 2px solid #1976D2",
                  ":hover": { border: "2px solid #1976D2", boxShadow: "none" },
                  boxShadow: "none",
                }}
              >
                Preview
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

export default Keyskills;
