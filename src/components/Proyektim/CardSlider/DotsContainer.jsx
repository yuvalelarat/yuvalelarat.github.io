import React from "react";
import './DotsContainer.css';

function DotsContainer({ cards, currentIndex, handleDotClick }) {
  return (
    <div className="dots-container">
      {cards.map((_, index) => (
        <span
          key={index}
          className={`dot ${currentIndex === index ? "active" : ""}`}
          onClick={() => handleDotClick(index)}
        ></span>
      ))}
    </div>
  );
}

export default DotsContainer;
