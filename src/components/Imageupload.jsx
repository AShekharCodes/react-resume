import React, { useRef } from "react";
import { Button, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { addImg, removeImg } from "../redux/personalInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Imageupload.css";

const Imageupload = () => {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const imageStorage = sessionStorage.getItem("profileimage");
  const personal = useSelector((state) => state.personalInfo.value);
  const uploadImage = () => {
    fileInputRef.current.click();
  };
  // function that happens when clicked on avatar or "upload profile image" button
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        //sets image in sessionstorage and redux
        dispatch(addImg(reader.result));
        sessionStorage.setItem("profileimage", reader.result);
        //resets the ref to null
        fileInputRef.current.value = null;
      };
    }
  };
  // function when clicked the cross button on top-right of image
  const removeImage = () => {
    sessionStorage.removeItem("profileimage");
    dispatch(removeImg());
  };

  return (
    <>
      <div className="img-component">
        <div className="avatar-cross">
          {/* place for displaying the image */}
          <Avatar
            // either sets image from redux state if page isnt refreshed or from sessionstorage
            src={personal.profileimage || imageStorage}
            onClick={uploadImage}
            sx={{
              width: "125px",
              height: "125px",
              margin: "5px 0px 5px 10px",
              cursor: "pointer",
            }}
          />
          {/* conditionally rendering the remove image cross button */}
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
        {/* img upload button */}
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
          {/* conditionally changing the button */}
          {imageStorage ? "Change profile photo" : "Upload profile photo"}
        </Button>
      </div>
    </>
  );
};

export default Imageupload;
