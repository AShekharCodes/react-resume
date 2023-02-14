import React, { useState, useEffect } from "react";
import "../styles/Navigationtabs.css";

const Navigationtabs = ({ onTabSelect }) => {
  const [currentTab, setCurrentTab] = useState(
    Number(localStorage.getItem("selectedTab")) || 1
  );

  useEffect(() => {
    localStorage.setItem("selectedTab", currentTab);
  }, [currentTab]);

  const setTab = (tab) => {
    setCurrentTab(tab);
    onTabSelect(tab);
  };

  const style = {
    borderLeft: "3px solid rgb(44, 109, 230)",
    color: "rgb(44, 109, 230)",
  };

  return (
    <>
      <div className="list">
        <div className="list-item">
          <button
            className="list-button"
            onClick={() => setTab(1)}
            style={currentTab === 1 ? style : null}
          >
            Personal Info
          </button>
        </div>
        <div className="list-item">
          <button
            className="list-button"
            onClick={() => setTab(2)}
            style={currentTab === 2 ? style : null}
          >
            Work Experience
          </button>
        </div>
        <div className="list-item">
          <button
            className="list-button"
            onClick={() => setTab(3)}
            style={currentTab === 3 ? style : null}
          >
            Education
          </button>
        </div>
        <div className="list-item">
          <button
            className="list-button"
            onClick={() => setTab(4)}
            style={currentTab === 4 ? style : null}
          >
            Key Skills
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigationtabs;
