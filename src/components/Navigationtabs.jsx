import React, { useState } from "react";
import "../styling/Navigationtabs.css";

const Navigationtabs = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleClick = (id) => {
    setSelectedButton(id);
  };

  return (
    <>
      <div className="list">
        <div className="list-item">
          <button
            className="list-button"
            onClick={() => handleClick(1)}
            style={
              selectedButton === 1
                ? {
                    borderLeft: "3px solid rgb(44, 109, 230)",
                    color: "rgb(44, 109, 230)",
                  }
                : {}
            }
          >
            Personal Info
          </button>
        </div>
        <div className="list-item">
          <button
            className="list-button"
            onClick={() => handleClick(2)}
            style={
              selectedButton === 2
                ? {
                    borderLeft: "3px solid rgb(44, 109, 230)",
                    color: "rgb(44, 109, 230)",
                  }
                : {}
            }
          >
            Work Experience
          </button>
        </div>
        <div className="list-item">
          <button
            className="list-button"
            onClick={() => handleClick(3)}
            style={
              selectedButton === 3
                ? {
                    borderLeft: "3px solid rgb(44, 109, 230)",
                    color: "rgb(44, 109, 230)",
                  }
                : {}
            }
          >
            Education
          </button>
        </div>
        <div className="list-item">
          <button
            className="list-button"
            onClick={() => handleClick(4)}
            style={
              selectedButton === 4
                ? {
                    borderLeft: "3px solid rgb(44, 109, 230)",
                    color: "rgb(44, 109, 230)",
                  }
                : {}
            }
          >
            Key Skills
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigationtabs;
