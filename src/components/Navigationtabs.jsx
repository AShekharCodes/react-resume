import React from "react";
import "../styles/Navigationtabs.css";

const Navigationtabs = ({ activeTab, onTabChange }) => {
  const style = {
    borderLeft: "3px solid rgb(44, 109, 230)",
    color: "rgb(44, 109, 230)",
  };

  return (
    <div className="list">
      <div className="list-item">
        <button
          className="list-button"
          onClick={() => onTabChange(1)}
          style={activeTab === 1 ? style : null}
        >
          Personal Info
        </button>
      </div>
      <div className="list-item">
        <button
          className="list-button"
          onClick={() => onTabChange(2)}
          style={activeTab === 2 ? style : null}
        >
          Work Experience
        </button>
      </div>
      <div className="list-item">
        <button
          className="list-button"
          onClick={() => onTabChange(3)}
          style={activeTab === 3 ? style : null}
        >
          Education
        </button>
      </div>
      <div className="list-item">
        <button
          className="list-button"
          onClick={() => onTabChange(4)}
          style={activeTab === 4 ? style : null}
        >
          Key Skills
        </button>
      </div>
    </div>
  );
};

export default Navigationtabs;
