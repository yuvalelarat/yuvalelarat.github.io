import "./Mid.css";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Social from "./Social/Social";

function About() {
  const pStyle = {
    textDecoration: "underline",
    textAlign: "center",
    margin: 0,
  };

  const social = [
    {
      img: "social logos/linkedinc.png",
      link: "https://www.linkedin.com/in/yuvalelarat/",
      alt: "LinkedIn",
    },
    {
      img: "social logos/githubc1.png",
      link: "https://github.com/yuvalelarat",
      alt: "GitHub",
    },
  ];

  return (
    <>
      <div className="hellodiv">
        <p style={{ textAlign: "center", margin: 0 }}>
          Hello my name is Yuval, welcome to my portfolio!
        </p>
        <p style={pStyle}>yuvalelarat@gmail.com</p>

        <div className="socialdiv">
          {social.map((item, index) => (
            <Social
              key={index}
              imgSrc={item.img}
              link={item.link}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
      <div className="aboutdiv">
        <Education style={pStyle} />
        <Skills style={pStyle} />
      </div>
    </>
  );
}

export default About;
