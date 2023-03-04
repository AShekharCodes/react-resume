import React, { useState, useEffect } from "react";
import Inputcomponent from "./Inputcomponent";
import Dropdowncomponent from "./Dropdowncomponent";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEducationInfo } from "../redux/educationSlice";
import { Paper, Grid, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import "../styles/Education.css";

const Education = ({ onNext, onBack, validated }) => {
  const dispatch = useDispatch();

  //items for displaying in dropdown input component
  const startYears = [];
  for (let year = 2010; year <= 2023; year++) {
    startYears.push({ value: year.toString(), label: year.toString() });
  }
  const endYears = [];
  for (let year = 2010; year <= 2023; year++) {
    endYears.push({ value: year.toString(), label: year.toString() });
  }
  endYears.push({ value: "Not yet", label: "Not yet" });

  const types = [
    { value: "Under Graduation", label: "Under Graduation" },
    { value: "Post Graduation", label: "Post Graduation" },
    { value: "Doctorate", label: "Doctorate" },
    { value: "Certificate", label: "Certificate" },
    { value: "Diploma", label: "Diploma" },
  ];

  const [moreEducation, setMoreEducation] = useState(1);

  const addEducation = () => {
    setMoreEducation(2);
  };
  // function to execute when you remove additional fields
  const removeEducation = () => {
    setMoreEducation(1);
    setValue("type2", "");
    setValue("university2", "");
    setValue("degree2", "");
    setValue("score2", "");
    setValue("startyear2", "");
    setValue("endyear2", "");
  };

  // useForm hook
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });

  const [isSubmit, setIsSubmit] = useState(false);

  //function when data is submitted
  const onSubmit = (data) => {
    sessionStorage.setItem("education", JSON.stringify(data));
    dispatch(addEducationInfo(data));
    setIsSubmit(true);
    validated();
    console.log(data);
    setTimeout(() => {
      onNext();
    }, 1200);
  };

  //when you click reset
  const reset = () => {
    sessionStorage.removeItem("education");
    window.location.reload();
  };

  //to persist values in input fields even during reloads
  useEffect(() => {
    const education = JSON.parse(sessionStorage.getItem("education"));
    if (education) {
      Object.keys(education).forEach((key) => {
        setValue(key, education[key]);
      });
      if (education["type2"]) {
        setMoreEducation(2);
      }
    }
  }, [setValue, setMoreEducation]);

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
                {/* types of education/course input field */}
                <Dropdowncomponent
                  control={control}
                  options={types}
                  label="Type"
                  name={`type${i + 1}`}
                  rules={{ required: "Type is required!" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {/* input field for university/institute input field */}
                <Inputcomponent
                  control={control}
                  type="text"
                  name={`university${i + 1}`}
                  label="University/Institute"
                  error={errors[`university${i + 1}`]}
                  rules={{
                    required: "University/Institute is required!",
                    pattern: {
                      value: /^[a-zA-Z\s]+$/,
                      message: "Invalid university/institute name!",
                    },
                    maxLength: { value: 30, message: "Max 30 characters!" },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {/* input field for degree/course */}
                <Inputcomponent
                  control={control}
                  type="text"
                  name={`degree${i + 1}`}
                  label="Degree/Course"
                  error={errors[`degree${i + 1}`]}
                  rules={{
                    required: "Degree/Course is required!",
                    maxLength: { value: 20, message: "Max 20 characters!" },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {/* input field for entering percentage/grade */}
                <Inputcomponent
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
                {/* dropdown input for choosing starting year */}
                <Dropdowncomponent
                  control={control}
                  options={startYears}
                  label="Start Year"
                  name={`startyear${i + 1}`}
                  rules={{ required: "Start year is required!" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                {/* dropdown input for choosing ending year */}
                <Dropdowncomponent
                  control={control}
                  options={endYears}
                  label="End Year"
                  name={`endyear${i + 1}`}
                  rules={{ required: "End year is required!" }}
                />
              </Grid>
              <hr />
            </React.Fragment>
          ))}
          {/* add/remove input fields buttons are here and are displayed conditionally */}
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
          {/* back/reset/next buttons */}
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
              {/* button that changes to green when submitting form */}
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

export default Education;
