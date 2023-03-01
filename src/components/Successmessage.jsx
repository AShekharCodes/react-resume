import React from "react";
import "../styles/Successmessage.css";

const Successmessage = ({ message }) => {
  return (
    <div className="alert-box">
      <div className="alert-content">
        <div className="alert-message">
          {message} <i className="fas fa-check"></i>
        </div>
      </div>
    </div>
  );
};

export default Successmessage;
