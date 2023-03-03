import React, { useState, useEffect } from "react";
import { TextField, MenuItem } from "@mui/material";
import { Controller } from "react-hook-form";

const Dropdowncomponent = ({
  options,
  name,
  label,
  rules,
  submitted,
  control,
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

  //to change color of label when focusing and removing focus

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
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
          <label
            className={`label ${isFocused ? "focused" : ""} ${
              error ? "error" : ""
            } ${submitted && value ? "success" : ""}`}
          >
            {label}
          </label>
          <TextField
            select
            size={screenWidth < 1100 ? "small" : "medium"}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={(e) => {
              onBlur(e);
              handleBlur();
            }}
            inputRef={ref}
            error={!!error}
            helperText={error ? error.message : null}
          >
            {options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                sx={{ fontFamily: "Poppins, sans-serif" }}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      )}
    />
  );
};

export default Dropdowncomponent;
