import "./Skills.css";
import SkillCard from "./SkillCard";

function Skills({ style }) {
  return (
    <div>
      <h4 style={style}>Skills:</h4>
      <SkillCard/>
    </div>
  );
}

export default Skills;
