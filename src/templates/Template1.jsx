import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import "../styles/Template1.css";

const Template1 = () => {
  const personal = useSelector((state) => state.personalInfo.value);
  const personalStorage = localStorage.getItem("personalInfo");
  const imageStorage = localStorage.getItem("profileimage");
  const experience = useSelector((state) => state.workExperience.value);
  const education = useSelector((state) => state.education.value);
  const skills = useSelector((state) => state.skills.value);

  return (
    <div id="Template1">
      <div className="content">
        <div className="header-section">
          {imageStorage && (
            <div className="profile-img">
              <Avatar
                src={personal.profileimage || imageStorage}
                sx={{ width: "125px", height: "125px", marginLeft: "10px" }}
              />
            </div>
          )}
          <div className="personal">
            <p className="name">{`${personal.firstname} ${personal.lastname}`}</p>
            <p className="email">{personal.email}</p>
            <p className="mobile">{personal.mobile}</p>
          </div>
          <div className="location">
            <p className="address">{personal.address}</p>
            <p className="city">{personal.city}</p>
            <p className="state">{personal.state}</p>
            <p className="postalcode">{personal.postalcode}</p>
          </div>
        </div>
        <div className="experience-section">
          <div className="line"></div>
          <div className="text">Experience</div>
          <div className="line"></div>
          <div className="experience-container">
            <div className="experience-content">
              <p className="jobtitle">{experience.jobtitle1}</p>
              <p className="organisation">{experience.organisation1}</p>
              <p className="years">
                {experience.startyear1} - {experience.endyear1}
              </p>
            </div>
            {experience.jobtitle2 &&
              experience.organisation2 &&
              experience.startyear2 &&
              experience.endyear2 !== "" && (
                <div className="experience-content">
                  <p className="jobtitle">{experience.jobtitle2}</p>
                  <p className="organisation">{experience.organisation2}</p>
                  <p className="years">
                    {experience.startyear2} - {experience.endyear2}
                  </p>
                </div>
              )}
          </div>
        </div>
        <div className="education-section">
          <div className="line"></div>
          <div className="text">Education</div>
          <div className="line"></div>
          <div className="education-container">
            <div className="education-content">
              <p className="type">{education.type1}</p>
              <p className="university">{education.university1}</p>
              <p className="degree">{education.degree1}</p>
              <p className="score">{education.score1}</p>
              <p className="years">
                {education.startyear1} - {education.endyear1}
              </p>
            </div>
            {(education.type2 &&
              education.university2 &&
              education.degree2 &&
              education.score2 &&
              education.startyear2 &&
              education.endyear2) !== "" && (
              <div className="education-content">
                <p className="type">{education.type2}</p>
                <p className="university">{education.university2}</p>
                <p className="degree">{education.degree2}</p>
                <p className="score">{education.score2}</p>
                <p className="years">
                  {education.startyear2} - {education.endyear2}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="skills-section">
          <div className="line"></div>
          <div className="text">Skills</div>
          <div className="line"></div>
          <div className="skills-container">
            <div className="skills-content">
              <p className="skill">{skills.skill1}</p>
              <p className="skill">{skills.skill2}</p>
              <p className="skill">{skills.skill3}</p>
              <p className="skill">{skills.skill4}</p>
            </div>
            <div className="skills-content">
              <p className="skill">{skills.skill5}</p>
              <p className="skill">{skills.skill6}</p>
              <p className="skill">{skills.skill7}</p>
              <p className="skill">{skills.skill8}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
