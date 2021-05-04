import React from "react";

const JobCard = ({
  company,
  company_logo,
  company_url,
  location,
  type,
  title,
}) => {
  return (
    <div
      style={{ border: "1px solid grey", margin: "10px", borderRadius: "4px" }}
    >
      <img
        src={company_logo}
        alt=""
        style={{ height: "50px", marginTop: "10px" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h3>{company}</h3>
        <h3>{title}</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <a href={company_url} target="_blank" rel="noreferrer">
          Apply
        </a>
        <h3> {type}</h3>
        <h3> {location}</h3>
      </div>
    </div>
  );
};

export default JobCard;
