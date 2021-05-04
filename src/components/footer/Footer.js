import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/edwardBenedict"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"<ed8en/> "}</code>
      </a>
      <span>design</span>
    </div>
  );
};

export default Footer;
