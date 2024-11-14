import React from "react";
import "./Slider.css";

function Slider({ cards, currentIndex, handlePrev, handleNext }) {
  return (
    <div className="slider">
      <button className="slider-button left" onClick={handlePrev}>
        ❮
      </button>
      <div className="card">
        <img src={cards[currentIndex].img} alt="Card" className="card-img" />
        <h4 style={{ marginTop: 0, marginBottom: "5px" }}>
          {cards[currentIndex].text}
        </h4>
        <p className="card-info" style={{ margin: 0 }}>{cards[currentIndex].info}</p>
        <p style={{ margin: 0, textDecoration: "underline" }}>Made with:</p>
        <p style={{ margin: 0 }}>{cards[currentIndex].tech}</p>
        <button className="code-link">Source code on github</button>
      </div>
      <button className="slider-button right" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
}

export default Slider;
