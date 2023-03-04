import React, { useState, useEffect } from "react";
import Inputcomponent from "./Inputcomponent";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSkillInfo } from "../redux/skillsSlice";
import { Paper, Grid, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import "../styles/Keyskills.css";

const Keyskills = ({ onBack }) => {
  const [numInputs, setNumInputs] = useState(4);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addSkill = () => {
    if (numInputs < 8) {
      setNumInputs(numInputs + 1);
    }
  };

  const removeSkill = () => {
    if (numInputs > 4) {
      setNumInputs(numInputs - 1);
      setValue(`skill${numInputs}`, "");
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ mode: "onChange" });

  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (data) => {
    sessionStorage.setItem("skills", JSON.stringify(data));
    dispatch(addSkillInfo(data));
    setIsSubmit(true);
    console.log(data);
    setTimeout(() => {
      navigate("/preview");
    }, 1200);
  };

  const reset = () => {
    sessionStorage.removeItem("skills");
    window.location.reload();
  };

  useEffect(() => {
    const skills = JSON.parse(sessionStorage.getItem("skills"));
    if (skills) {
      let numInputs = 4;
      for (let i = 4; i <= 8; i++) {
        if (skills[`skill${i}`]) {
          numInputs = i;
        } else {
          break;
        }
      }
      setNumInputs(numInputs);
      Object.keys(skills).forEach((key) => {
        setValue(key, skills[key]);
      });
    }
  }, [setValue, setNumInputs]);

  return (
    <>
      <Paper component="form" onSubmit={handleSubmit(onSubmit)} elevation={3}>
        <Grid className="grid" container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="header">Key Skills</div>
          </Grid>
          {[...Array(numInputs)].map((_, i) => (
            <Grid item key={i + 1} xs={12} sm={12} md={6} lg={6}>
              <Inputcomponent
                control={control}
                type="text"
                name={`skill${i + 1}`}
                label={`Skill ${i + 1}`}
                error={errors[`skill${i + 1}`]}
                rules={{
                  required: "Skill is required!",
                  maxLength: { value: 15, message: "Max 15 characters!" },
                }}
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
                    padding: "7px 26px",
                    fontWeight: "bold",
                    border: " 2px solid #1976D2",
                    ":hover": {
                      border: "2px solid #1976D2",
                      boxShadow: "none",
                    },
                    boxShadow: "none",
                  }}
                >
                  Preview
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Keyskills;
