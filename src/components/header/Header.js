import React from "react";
import jobLogo from "../../assets/job-logo.svg";
import octocat from "../../assets/octocat.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-div">
        <img src={octocat} className="header-img" alt="job" />
        <img src={jobLogo} className="header-img job-img" alt="job" />
      </div>
      <h1 className="header-title">Github Job Finder</h1>
    </div>
  );
};

export default Header;
