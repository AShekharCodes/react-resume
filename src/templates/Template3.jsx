import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import "../styles/Template3.css";

const Template3 = () => {
  //Here, I have fetched both values from redux and sessionStorage. So, in case of reload, the data will not be lost
  const imageStorage = sessionStorage.getItem("profileimage");
  const personal = useSelector((state) => state.personalInfo.value);
  const personalStorage = JSON.parse(sessionStorage.getItem("personalInfo"));
  const experience = useSelector((state) => state.workExperience.value);
  const experienceStorage = JSON.parse(
    sessionStorage.getItem("workExperience")
  );
  const education = useSelector((state) => state.education.value);
  const educationStorage = JSON.parse(sessionStorage.getItem("education"));
  const skills = useSelector((state) => state.skills.value);
  const skillsStorage = JSON.parse(sessionStorage.getItem("skills"));

  return (
    <div id="Template3">
      <div className="content-3">
        <div className="personal-section">
          <div className="personal-data-3">
            {imageStorage && (
              <div className="profile-img">
                <Avatar
                  src={personal.profileimage || imageStorage}
                  sx={{ width: "125px", height: "125px", marginLeft: "10px" }}
                />
              </div>
            )}
            <div className="personal">
              <p className="name">{`${
                personal.firstname || personalStorage.firstname
              } ${personal.lastname || personalStorage.lastname}`}</p>
              <p className="email">{personal.email || personalStorage.email}</p>
              <p className="mobile">
                {personal.mobile || personalStorage.mobile}
              </p>
            </div>
            <div className="location">
              <p className="address">
                {personal.address || personalStorage.address}
              </p>
              <p className="city">{personal.city || personalStorage.city}</p>
              <p className="state">{personal.state || personalStorage.state}</p>
              <p className="postalcode">
                {personal.postalcode || personalStorage.postalcode}
              </p>
            </div>
          </div>
          <div className="objective">
            {personal.objective || personalStorage.objective}
          </div>
        </div>
        <div className="experience-section">
          <div className="line-3"></div>
          <div className="text">Experience</div>
          <div className="line-3"></div>
          <div className="experience-container-3">
            <div className="experience-content">
              <p className="jobtitle">
                {experience.jobtitle1 || experienceStorage.jobtitle1}
              </p>
              <p className="organisation">
                {experience.organisation1 || experienceStorage.organisation1}
              </p>
              <p className="years">
                {experience.startyear1 || experienceStorage.startyear1} -{" "}
                {experience.endyear1 || experienceStorage.endyear1}
              </p>
            </div>
            {experienceStorage.jobtitle2 ? (
              <div className="experience-content">
                <p className="jobtitle">
                  {experience.jobtitle2 || experienceStorage.jobtitle2}
                </p>
                <p className="organisation">
                  {experience.organisation2 || experienceStorage.organisation2}
                </p>
                <p className="years">
                  {experience.startyear2 || experienceStorage.startyear2} -{" "}
                  {experience.endyear2 || experienceStorage.endyear2}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="education-section">
          <div className="line-3"></div>
          <div className="text">Education</div>
          <div className="line-3"></div>
          <div className="education-container-3">
            <div className="education-content">
              <p className="type">
                {education.type1 || educationStorage.type1}
              </p>
              <p className="university">
                {education.university1 || educationStorage.university1}
              </p>
              <p className="degree">
                {education.degree1 || educationStorage.degree1}
              </p>
              <p className="score">
                {education.score1 || educationStorage.score1}
              </p>
              <p className="years">
                {education.startyear1 || educationStorage.startyear1} -{" "}
                {education.endyear1 || educationStorage.endyear1}
              </p>
            </div>
            {educationStorage.type2 ? (
              <div className="education-content">
                <p className="type">
                  {education.type2 || educationStorage.type2}
                </p>
                <p className="university">
                  {education.university2 || educationStorage.university2}
                </p>
                <p className="degree">
                  {education.degree2 || educationStorage.degree2}
                </p>
                <p className="score">
                  {education.score2 || educationStorage.score2}
                </p>
                <p className="years">
                  {education.startyear2 || educationStorage.startyear2} -{" "}
                  {education.endyear2 || educationStorage.endyear2}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="skills-section">
          <div className="line-3"></div>
          <div className="text">Skills</div>
          <div className="line-3"></div>
          <div className="skills-container-3">
            <div className="skills-content">
              <p className="skill">{skills.skill1 || skillsStorage.skill1}</p>
              <p className="skill">{skills.skill2 || skillsStorage.skill2}</p>
              <p className="skill">{skills.skill3 || skillsStorage.skill3}</p>
              <p className="skill">{skills.skill4 || skillsStorage.skill4}</p>
            </div>
            <div className="skills-content">
              <p className="skill">{skills.skill5 || skillsStorage.skill5}</p>
              <p className="skill">{skills.skill6 || skillsStorage.skill6}</p>
              <p className="skill">{skills.skill7 || skillsStorage.skill7}</p>
              <p className="skill">{skills.skill8 || skillsStorage.skill8}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
