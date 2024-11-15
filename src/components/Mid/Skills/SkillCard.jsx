import "./SkillCard.css";

function SkillCard() {
  const imageNames = [
    { name: "HTML", img: "htmlc.png" },
    { name: "CSS", img: "cssc.png" },
    { name: "JavaScript", img: "jsc.png" },
    { name: "Python", img: "pythonc.png" },
    { name: "React", img: "reactc.png" },
    { name: "Node.js", img: "nodejsc.png" },
    { name: "MongoDB", img: "mongodbc.png" },
    { name: "PostgreSQL", img: "postgresqlc.png" },
    { name: "Git", img: "gitc.png" },
    { name: "GitHub", img: "githubc.png" },
  ];


  return (
    <div className="gallery">
      {imageNames.map((image, index) => (
        <div key={index} className="gallery-item-container">
          <img
            src={`skill logos/${image.img}`} 
            alt={image.name} 
            className="gallery-item"
          />
          <p className="image-text">{image.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SkillCard;
