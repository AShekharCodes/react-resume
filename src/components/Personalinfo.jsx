import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addPersonalInfo,
  removeImg,
  resetPersonalInfo,
} from "../redux/personalInfoSlice";
import { useNavigate } from "react-router-dom";
import { Paper, Grid, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Inputcomponent from "./Inputcomponent";
import Imageupload from "./Imageupload";
import "../styles/Personalinfo.css";

const Personalinfo = ({ onNext, validated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // function only for the back button on personalinfo page
  const goBack = () => {
    navigate("/");
    sessionStorage.clear();
    dispatch(resetPersonalInfo());
    dispatch(removeImg());
  };

  // useForm hook
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });

  const [isSubmit, setIsSubmit] = useState(false);

  // function for submitting form
  const onSubmit = (data) => {
    sessionStorage.setItem("personalInfo", JSON.stringify(data));
    dispatch(addPersonalInfo(data));
    setIsSubmit(true);
    // sets validation for personalnfo form to true and saves it in sessionstorage
    validated();
    setTimeout(() => {
      onNext();
    }, 1200);
  };

  // function for reset button
  const reset = () => {
    sessionStorage.removeItem("personalInfo");
    sessionStorage.removeItem("profileimage");
    window.location.reload();
  };

  // to persist values in fields even during reloads
  useEffect(() => {
    const personalInfo = JSON.parse(sessionStorage.getItem("personalInfo"));
    if (personalInfo) {
      Object.keys(personalInfo).forEach((key) => {
        setValue(key, personalInfo[key]);
      });
    }
  }, [setValue]);

  return (
    <>
      <Paper
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate //to remove default email validation popup message
        elevation={3}
      >
        <Grid className="grid" container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="header">Personal Details</div>
          </Grid>
          <hr />
          {/* the image upload component */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="image-component">
              <Imageupload />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* input field for first name */}
            <Inputcomponent
              control={control}
              type="text"
              label="First name"
              name="firstname"
              // validation rules set like this in every field as per field
              rules={{
                required: "First name is required!",
                maxLength: { value: 20, message: "Max 20 characters!" },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Invalid name!",
                },
              }}
              error={errors.firstname}
            />
          </Grid>
          {/* input field for lastname */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Inputcomponent
              control={control}
              type="text"
              label="Last name"
              name="lastname"
              rules={{
                required: "Last name is required!",
                maxLength: { value: 20, message: "Max 20 characters!" },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Invalid name!",
                },
              }}
              error={errors.lastname}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* input field for email */}
            <Inputcomponent
              control={control}
              type="email"
              label="Email"
              name="email"
              rules={{
                required: "Email is required!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email!",
                },
                maxLength: { value: 30, message: "Max 30 characters!" },
              }}
              error={errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* input field for mobile number */}
            <Inputcomponent
              control={control}
              type="number"
              isKeyDown={true}
              label="Mobile"
              name="mobile"
              rules={{
                required: "Mobile number is required!",
                minLength: { value: 10, message: "Min 10 digits!" },
                maxLength: { value: 10, message: "Max 10 digits!" },
                pattern: { value: /^[0-9]{10}$/, message: "Invalid number!" },
              }}
              error={errors.mobile}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {/* input field for address */}
            <Inputcomponent
              control={control}
              type="text"
              label="Address"
              name="address"
              rules={{
                required: "Address is required!",
                maxLength: { value: 50, message: "Max 50 characters!" },
              }}
              error={errors.address}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* input field for city */}
            <Inputcomponent
              control={control}
              type="text"
              label="City"
              name="city"
              rules={{
                required: "City is required!",
                maxLength: { value: 15, message: "Max 15 characters" },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Invalid city!",
                },
              }}
              error={errors.city}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* input field for state */}
            <Inputcomponent
              control={control}
              type="text"
              label="State"
              name="state"
              rules={{
                required: "State is required!",
                maxLength: { value: 15, message: "Max 15 characters!" },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Invalid state!",
                },
              }}
              error={errors.state}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {/* input field for pincode */}
            <Inputcomponent
              control={control}
              type="number"
              isKeyDown={true}
              label="Postal code"
              name="postalcode"
              rules={{
                required: "Postal code is required!",
                minLength: { value: 6, message: "Min 6 digits!" },
                maxLength: { value: 6, message: "Max 6 digits!" },
                pattern: { value: /^[0-9]{6}$/, message: "Invalid number!" },
              }}
              error={errors.postalcode}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {/* input field for entering objective */}
            <Inputcomponent
              control={control}
              type="text"
              isMultiline={true}
              rows={5}
              label="Objective"
              name="objective"
              rules={{
                required: "Objective is required!",
                maxLength: { value: 200, message: "Max 200 characters!" },
              }}
              placeholder="Max 200 characters"
              error={errors.objective}
            />
          </Grid>
          <hr />
          {/* back/reset/next button */}
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
              {/* button that turns green when submitting */}
              {isSubmit ? (
                <Button
                  variant="contained"
                  sx={{
                    padding: "2px 35px",
                    backgroundColor: "rgb(72, 143, 43)",
                    border: "2px solid rgb(72, 143, 43)",
                    boxShadow: "none",
                    ":hover": {
                      border: "2px solid rgb(72, 143, 43)",
                      boxShadow: "none",
                      backgroundColor: "rgb(72, 143, 43)",
                    },
                  }}
                >
                  <DoneIcon sx={{ width: "30px", height: "30px" }} />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    textTransform: "capitalize",
                    fontSize: "12px",
                    padding: "7px 36.5px",
                    fontWeight: "bold",
                    border: " 2px solid #1976D2",
                    ":hover": {
                      border: "2px solid #1976D2",
                      boxShadow: "none",
                    },
                    boxShadow: "none",
                  }}
                >
                  Next
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Personalinfo;
