import React from "react";
import jobLogo from "../assets/job-logo.svg";
import octocat from "../assets/octocat.png";

const Header = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "25px",
        }}
      >
        <img src={octocat} style={{ width: "200px" }} alt="job" />
        <img src={jobLogo} style={{ width: "200px" }} alt="job" />
      </div>
      <h1 style={{ color: "#00438C" }}>Github Job Finder</h1>
    </div>
  );
};

export default Header;
