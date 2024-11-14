import "./Top.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Top() {
  const [text] = useTypewriter({
    words: [
      "Software developer",
      "Gamer",
      "Tech Enthusiast",
      "Problem Solver",
      "Knowledge Seeker",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  const headersStyles = { margin: 0, textAlign: "center" };

  return (
    <div className="topdiv">
      <h1 style={headersStyles}>Yuval Elarat</h1>
      <h3 style={headersStyles}>
        {text}
        <Cursor />
      </h3>
    </div>
  );
}

export default Top;
