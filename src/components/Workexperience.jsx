import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addExperienceInfo } from "../redux/workExperienceSlice";
import Inputcomponent from "./Inputcomponent";
import Dropdowncomponent from "./Dropdowncomponent";
import { Paper, Grid, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import "../styles/Workexperience.css";

const Workexperience = ({ onNext, onBack }) => {
  const dispatch = useDispatch();

  const years = [];
  for (let year = 2010; year <= 2023; year++) {
    years.push({ value: year.toString(), label: year.toString() });
  }
  const [moreExperience, setMoreExperience] = useState(1);

  const addExperience = () => {
    setMoreExperience(2);
  };

  const removeExperience = () => {
    setMoreExperience(1);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    localStorage.setItem("workExperience", JSON.stringify(data));
    dispatch(addExperienceInfo(data));
    setIsSubmitted(true);
    console.log(data);
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  const reset = () => {
    localStorage.removeItem("workExperience");
    window.location.reload();
  };

  useEffect(() => {
    const personalInfo = JSON.parse(localStorage.getItem("workExperience"));
    if (personalInfo) {
      Object.keys(personalInfo).forEach((key) => {
        setValue(key, personalInfo[key]);
      });
    }
  }, [setValue]);

  return (
    <>
      <Paper component="form" onSubmit={handleSubmit(onSubmit)} elevation={3}>
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
                  submitted={isSubmitted}
                  control={control}
                  type="text"
                  name={`jobtitle${i + 1}`}
                  label="Job Title"
                  error={errors[`jobtitle${i + 1}`]}
                  rules={{
                    required: "Job title is required!",
                    maxLength: { value: 20, message: "Max 20 characters!" },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  submitted={isSubmitted}
                  control={control}
                  type="text"
                  name={`organisation${i + 1}`}
                  label="Organisation Name"
                  error={errors[`organisation${i + 1}`]}
                  rules={{
                    required: "Organisation name is required!",
                    maxLength: { value: 20, message: "Max 20 characters!" },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Dropdowncomponent
                  options={years}
                  submitted={isSubmitted}
                  control={control}
                  label="Start Year"
                  name={`startyear${i + 1}`}
                  rules={{ required: "Start year is required!" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Dropdowncomponent
                  options={years}
                  submitted={isSubmitted}
                  control={control}
                  label="End Year"
                  name={`endyear${i + 1}`}
                  rules={{ required: "End year is required!" }}
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

              {isSubmitted ? (
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

export default Workexperience;
