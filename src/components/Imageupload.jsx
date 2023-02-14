import React from "react";
import { Button, Avatar } from "@mui/material";
import "../styling/Imageupload.css";

const Imageupload = () => {
  return (
    <>
      <div className="img-component">
        <Avatar />
        <Button variant="contained" color="primary">
          Upload profile photo
        </Button>
      </div>
    </>
  );
};

export default Imageupload;
