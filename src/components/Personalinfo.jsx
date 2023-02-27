import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addInfo, resetInfo } from "../redux/personalInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Grid, Button, Snackbar, Alert } from "@mui/material";
import Inputcomponent from "./Inputcomponent";
import Imageupload from "./Imageupload";
import "../styles/Personalinfo.css";

const Personalinfo = ({ onNext }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.personalInfo.value);

  const goBack = () => {
    navigate("/");
  };

  const [state, setState] = useState(personalInfo);

  const reset = () => {
    setState({
      profileimage: "",
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      postalcode: "",
      objective: "",
    });
    dispatch(resetInfo());
    localStorage.removeItem("personalInfo");
    localStorage.removeItem("profileimage");
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      email: data.get("email"),
      mobile: data.get("mobile"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      postalcode: data.get("postalcode"),
      objective: data.get("objective"),
    };

    // Validate form fields
    const isFormValid =
      state.firstname &&
      state.lastname &&
      state.email &&
      state.mobile &&
      state.address &&
      state.city &&
      state.state &&
      state.postalcode &&
      state.objective;

    if (!isFormValid) {
      setSnackbarOpen(true);
      return;
    }
    dispatch(addInfo(formData));
    localStorage.setItem("personalInfo", JSON.stringify(formData));
    console.log(formData);
    onNext();
  };

  useEffect(() => {
    // Load personal info from localStorage
    const savedPersonalInfo = localStorage.getItem("personalInfo");
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
            <div className="header">Personal Details</div>
          </Grid>
          <hr />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="image-component">
              <Imageupload />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              type="text"
              label="First name"
              name="firstname"
              id="first-name"
              value={state.firstname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              type="text"
              label="Last name"
              name="lastname"
              id="last-name"
              value={state.lastname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              type="email"
              label="Email"
              name="email"
              id="email"
              value={state.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              type="number"
              isKeyDown={true}
              label="Mobile"
              name="mobile"
              id="mobile"
              value={state.mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Inputcomponent
              type="text"
              label="Address"
              name="address"
              id="address"
              value={state.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              type="text"
              label="City"
              name="city"
              id="city"
              value={state.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              type="text"
              label="State"
              name="state"
              id="state"
              value={state.state}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              type="number"
              isKeyDown={true}
              label="Postal code"
              name="postalcode"
              id="postal-code"
              value={state.postalcode}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Inputcomponent
              type="text"
              isMultiline={true}
              rows={5}
              limit={400}
              label="Objective"
              name="objective"
              id="objective"
              value={state.objective}
              onChange={handleChange}
              placeholder="Max 400 characters"
            />
          </Grid>
          <hr />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="back-next-btn">
              <Button
                variant="outlined"
                onClick={goBack}
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

export default Personalinfo;
