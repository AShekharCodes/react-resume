import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import "../styles/Inputcomponent.css";

const Inputcomponent = (props) => {
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

  //to prevent number input types from incrementing or decrementing using up/down arrow keys
  const handleKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    }
  };

  return (
    <div className="input-div">
      <label className={`label ${isFocused ? "focused" : ""}`}>
        {props.label}
      </label>
      <TextField
        size={screenWidth < 1100 ? "small" : "medium"}
        id={props.id}
        name={props.name}
        type={props.type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={props.isKeyDown ? handleKeyDown : null}
        multiline={props.isMultiline}
        rows={props.rows}
        inputProps={{ maxLength: props.limit }}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

Inputcomponent.defaultProps = {
  isKeyDown: false,
  isMultiline: false,
  rows: 1,
  limit: 100,
  value: "",
  name: "",
};

export default Inputcomponent;
