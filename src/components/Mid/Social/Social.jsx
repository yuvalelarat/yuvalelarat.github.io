import React from "react";
import "./Social.css";

function Social({ imgSrc, link, alt }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="social-icon-link">
      <img src={imgSrc} alt={alt} className="social-icon-img" />
    </a>
  );
}

export default Social;
