import React from "react";
import { Card, Button } from "react-bootstrap";

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
      style={{
        border: "1px solid #28A745",
        margin: "10px",
        borderRadius: "4px",
        backgroundColor: "white",
      }}
    >
      <img
        src={company_logo}
        alt=""
        style={{ height: "75px", margin: "10px" }}
      />
      <Card border="success" style={{ width: "50rem" }}>
        <Card.Header style={{ backgroundColor: "grey", color: "white" }}>
          {title}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {company}- {location}
          </Card.Title>
          <p>{type}</p>
          <Card.Text>
            <Button
              variant="success"
              style={{
                color: "white",
                width: "20rem",
              }}
            >
              <a
                href={company_url}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "white",
                }}
              >
                Apply
              </a>
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JobCard;
