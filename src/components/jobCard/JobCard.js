import React from "react";
import { Card } from "react-bootstrap";
import "./JobCard.css";

const JobCard = ({
  company,
  company_logo,
  company_url,
  location,
  type,
  title,
}) => {
  return (
    <div className="card-wrapper">
      <img src={company_logo} alt="" className="comp-logo" />
      <Card border="success" className="card">
        <Card.Header className="card-header">{title}</Card.Header>
        <Card.Body>
          <Card.Title>
            {company}- {location}
          </Card.Title>
          <p>{type}</p>
          <div className="a-wrapper">
            <a
              href={company_url}
              target="_blank"
              rel="noreferrer"
              className="apply"
            >
              Apply
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobCard;
