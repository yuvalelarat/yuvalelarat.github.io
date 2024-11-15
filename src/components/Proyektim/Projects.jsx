import React, { useState } from "react";
import Slider from "./CardSlider/Slider";
import DotsContainer from "./CardSlider/DotsContainer";
import "./Projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      img: "project pics/tagia.png",
      text: "Tagia",
      info: "CS degree project for ordering and managing events (backend team).",
      tech: "React, Nodejs(Express), MongoDB",
      link: "https://github.com/yuvalelarat/order-management-system",
    },
    {
      id: 2,
      img: "project pics/poneglyph.png",
      text: "Poneglyph",
      info: "Encode/decode text in images and download or share with others users.",
      tech: "Python, Flask, SQLite, Bootsrap",
      link: "https://github.com/yuvalelarat/Poneglyph",
    },
    {
      id: 3,
      img: "project pics/zombiegame.png",
      text: "Zombie Game",
      info: "OOP course project, all the characters designs were created by me.",
      tech: "C#, WinForms",
      link: "https://github.com/yuvalelarat/Zombie-Game",
    },
    {
      id: 4,
      img: "project pics/discordbot.png",
      text: "Discord Music Bot",
      info: "Discord bot that can play music/playlists from YouTube.",
      tech: "Python",
      link: "https://github.com/yuvalelarat/Discord-Music-Bot",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <h4 className="projects-title">My projects:</h4>
      <Slider
        cards={cards}
        currentIndex={currentIndex}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <DotsContainer
        cards={cards}
        currentIndex={currentIndex}
        handleDotClick={handleDotClick}
      />
    </div>
  );
}

export default Projects;
