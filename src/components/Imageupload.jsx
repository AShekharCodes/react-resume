import React, { useRef } from "react";
import { Button, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { addImg, removeImg } from "../redux/personalInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Imageupload.css";

const Imageupload = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const imageStorage = localStorage.getItem("profileimage");
  const personal = useSelector((state) => state.personalInfo.value);
  const uploadImage = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        dispatch(addImg(reader.result));
        localStorage.setItem("profileimage", reader.result);
        fileInputRef.current.value = null;
      };
    }
  };

  const removeImage = () => {
    localStorage.removeItem("profileimage");
    dispatch(removeImg());
  };

  return (
    <>
      <div className="img-component">
        <div className="avatar-cross">
          <Avatar
            src={personal.profileimage || imageStorage}
            onClick={uploadImage}
            sx={{
              width: "125px",
              height: "125px",
              margin: "5px 0px 5px 10px",
              cursor: "pointer",
            }}
          />
          {imageStorage ? (
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
          {imageStorage ? "Change profile photo" : "Upload profile photo"}
        </Button>
      </div>
    </>
  );
};

export default Imageupload;
