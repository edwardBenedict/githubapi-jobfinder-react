import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "80vw",
        backgroundColor: "White",
        height: "50px",
        fontSize: "2rem",
        color: "#007BFF",
        border: "0.5px solid #007BFF",
        borderRadius: "5px",
        margin: "20px 0px",
      }}
    >
      <a
        href="https://github.com/edwardBenedict"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code
          style={{ color: "grey", fontWeight: "bold", fontStyle: "italic" }}
        >
          {"<ed8en/> "}
        </code>
      </a>
      <span>design</span>
    </div>
  );
};

export default Footer;
