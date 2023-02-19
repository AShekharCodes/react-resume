import React, { useState } from "react";
import Inputcomponent from "./Inputcomponent";
import { Paper, Grid, Button } from "@mui/material";
import "../styles/Keyskills.css";

const Keyskills = ({ onBack }) => {
  const [numInputs, setNumInputs] = useState(4);

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

  return (
    <>
      <Paper elevation={3}>
        <Grid className="grid" container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="header">Key Skills</div>
          </Grid>
          {[...Array(numInputs)].map((_, i) => (
            <Grid item key={i + 1} xs={12} sm={12} md={6} lg={6}>
              <Inputcomponent
                type="text"
                label={`Skill ${i + 1}`}
                id={`skill-${i + 1}`}
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
        </Grid>
      </Paper>
    </>
  );
};

export default Keyskills;
