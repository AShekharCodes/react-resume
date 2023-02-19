import React, { useState } from "react";
import Inputcomponent from "./Inputcomponent";
import { Paper, Grid, MenuItem, Button } from "@mui/material";
import "../styles/Workexperience.css";

const Workexperience = ({ onNext, onBack }) => {
  const [moreExperience, setMoreExperience] = useState(1);

  const years = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];

  const addExperience = () => {
    setMoreExperience(2);
  };

  const removeExperience = () => {
    setMoreExperience(1);
  };

  return (
    <>
      <Paper elevation={3}>
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
                  label="Job Title"
                  id={`job-title-${i + 1}`}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  type="text"
                  label="Organization Name"
                  id={`organization-name-${i + 1}`}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  type="number"
                  isSelect={true}
                  label="Start Year"
                  id={`start-year-${i + 1}`}
                  content={years.map((year) => (
                    <MenuItem
                      sx={{ fontFamily: "Poppins, sans-serif" }}
                      key={year}
                      value={year}
                    >
                      {year}
                    </MenuItem>
                  ))}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Inputcomponent
                  type="number"
                  isSelect={true}
                  label="End Year"
                  id={`end-year-${i + 1}`}
                  content={years.map((year) => (
                    <MenuItem
                      sx={{ fontFamily: "Poppins, sans-serif" }}
                      key={year}
                      value={year}
                    >
                      {year}
                    </MenuItem>
                  ))}
                />
              </Grid>
              {moreExperience === 2 && <hr className="conditional-line" />}
            </React.Fragment>
          ))}
          <hr />
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
                onClick={onNext}
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
        </Grid>
      </Paper>
    </>
  );
};

export default Workexperience;
