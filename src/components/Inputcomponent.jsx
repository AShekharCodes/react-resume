import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import "../styles/Inputcomponent.css";

const Inputcomponent = ({
  control,
  label,
  name,
  placeholder,
  type,
  isKeyDown,
  isMultiline,
  rows,
  rules,
}) => {
  //to adjust input field height according to screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //to prevent number input types from incrementing or decrementing using up/down arrow keys
  const handleKeyDown = (event) => {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={rules}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <div className="input-div">
          <label className={`label ${value ? "focused" : ""}`}>{label}</label>
          <TextField
            size={screenWidth < 1100 ? "small" : "medium"}
            name={name}
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            onKeyDown={isKeyDown ? handleKeyDown : null}
            multiline={isMultiline}
            rows={rows}
            value={value}
            onChange={onChange}
            inputRef={ref}
            error={!!error}
            helperText={error ? error.message : null}
          />
        </div>
      )}
    />
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
