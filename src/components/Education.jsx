import React, { useState, useEffect } from "react";
import Inputcomponent from "./Inputcomponent";
import Dropdowncomponent from "./Dropdowncomponent";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEducationInfo } from "../redux/educationSlice";
import { Paper, Grid, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import "../styles/Education.css";

const Education = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const years = [];
  for (let year = 2010; year <= 2023; year++) {
    years.push({ value: year.toString(), label: year.toString() });
  }
  const types = [
    { value: "Under Graduation", label: "Under Graduation" },
    { value: "Post Graduation", label: "Post Graduation" },
  ];

  const [moreEducation, setMoreEducation] = useState(1);

  const addEducation = () => {
    setMoreEducation(2);
  };

  const removeEducation = () => {
    setMoreEducation(1);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    localStorage.setItem("education", JSON.stringify(data));
    dispatch(addEducationInfo(data));
    setIsSubmitted(true);
    console.log(data);
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  const reset = () => {
    localStorage.removeItem("education");
    window.location.reload();
  };

  useEffect(() => {
    const personalInfo = JSON.parse(localStorage.getItem("education"));
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
                <Dropdowncomponent
                  submitted={isSubmitted}
                  control={control}
                  options={types}
                  label="Type"
                  name={`type${i + 1}`}
                  rules={{ required: "Type is required!" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  submitted={isSubmitted}
                  control={control}
                  type="text"
                  name={`university${i + 1}`}
                  label="University"
                  error={errors[`university${i + 1}`]}
                  rules={{
                    required: "University is required!",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Invalid university name!",
                    },
                    maxLength: { value: 30, message: "Max 30 characters!" },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  submitted={isSubmitted}
                  control={control}
                  type="text"
                  name={`degree${i + 1}`}
                  label="Degree"
                  error={errors[`degree${i + 1}`]}
                  rules={{
                    required: "Degree is required!",
                    maxLength: { value: 15, message: "Max 15 characters!" },
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Invalid degree!",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  submitted={isSubmitted}
                  control={control}
                  type="number"
                  name={`score${i + 1}`}
                  label="Percentage/Grade"
                  error={errors[`score${i + 1}`]}
                  rules={{
                    required: "Percentage/Grade is required!",
                    maxLength: { value: 5, message: "Max 4 digits! " },
                    pattern: {
                      value: /^(100(\.0{1,2})?|\d{1,2}(\.\d{1,2})?)$/,
                      message: "Invalid grade!",
                    },
                  }}
                  isKeyDown={true}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Dropdowncomponent
                  submitted={isSubmitted}
                  control={control}
                  options={years}
                  label="Start Year"
                  name={`startyear${i + 1}`}
                  rules={{ required: "Start year is required!" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Dropdowncomponent
                  submitted={isSubmitted}
                  control={control}
                  options={years}
                  label="End Year"
                  name={`endyear${i + 1}`}
                  rules={{ required: "End year is required!" }}
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

export default Education;
