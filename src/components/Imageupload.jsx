import React, { useState, useRef } from "react";
import { Button, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/Imageupload.css";

const Imageupload = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const uploadImage = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
        fileInputRef.current.value = null;
      };
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <>
      <div className="img-component">
        <div className="avatar-cross">
          <Avatar
            src={image}
            onClick={uploadImage}
            sx={{
              width: "125px",
              height: "125px",
              margin: "5px 0px 5px 10px",
              border: "0.5px solid rgb(92, 92, 92)",
              cursor: "pointer",
            }}
          />
          {image ? (
            <CloseIcon sx={{ cursor: "pointer" }} onClick={removeImage} />
          ) : null}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleChange}
        />
        <Button
          variant="text"
          onClick={uploadImage}
          sx={{
            fontFamily: "Poppins, sans serif",
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: "13px",
          }}
        >
          {image ? "Change profile photo" : "Upload profile photo"}
        </Button>
      </div>
    </>
  );
};

export default Imageupload;
