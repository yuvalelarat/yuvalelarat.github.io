import "./SkillCard.css";

function SkillCard() {
  const imageNames = [
    { name: "HTML", img: "html.png" },
    { name: "CSS", img: "css.png" },
    { name: "JavaScript", img: "js.png" },
    { name: "Python", img: "python.png" },
    { name: "React", img: "react.png" },
    { name: "Node.js", img: "node.png" },
    { name: "MongoDB", img: "mongodb.png" },
    { name: "PostgreSQL", img: "postgresql.png" },
    { name: "Git", img: "git.png" },
    { name: "GitHub", img: "github.png" },
  ];


  return (
    <div className="gallery">
      {imageNames.map((image, index) => (
        <div key={index} className="gallery-item-container">
          <img
            src={`skill logos/${image.img}`} // Dynamically set the image source
            alt={image.name} // Alt text for accessibility
            className="gallery-item"
          />
          <p className="image-text">{image.name}</p> {/* Text below each image */}
        </div>
      ))}
    </div>
  );
}

export default SkillCard;
