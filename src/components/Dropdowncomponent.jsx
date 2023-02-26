import React, { useState, useEffect } from "react";
import { TextField, MenuItem } from "@mui/material";

const Dropdowncomponent = (props) => {
  const years = [];
  for (let i = 2000; i <= 2023; i++) {
    years.push(i);
  }

  //to adjust input field height according to screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //to color up label while focusing on input field
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="input-div">
      <label className={`label ${isFocused ? "focused" : ""}`}>
        {props.label}
      </label>
      <TextField
        size={screenWidth < 1100 ? "small" : "medium"}
        variant="outlined"
        name={props.name}
        id={props.id}
        select
        value={props.value}
        onChange={props.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {years.map((year) => (
          <MenuItem
            key={year}
            value={year}
            sx={{ fontFamily: "Poppins, sans-serif" }}
          >
            {year}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Dropdowncomponent;
