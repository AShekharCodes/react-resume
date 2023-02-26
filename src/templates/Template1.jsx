import React from "react";
import { useSelector } from "react-redux";
import "../styles/Template1.css";

const Template1 = () => {
  const personal = useSelector((state) => state.personalInfo.value);

  return (
    <div id="Template1">
      <div className="content">
        <h6>{personal.firstname}</h6>
        <h6>{personal.lastname}</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nobis,
          id explicabo placeat debitis eligendi commodi tempore? Iure
          dignissimos corporis sed quis eligendi adipisci porro est hic iusto
          laboriosam aspernatur optio esse, culpa aperiam.
        </p>
      </div>
    </div>
  );
};

export default Template1;
