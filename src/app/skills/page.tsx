import Navbar from "@/components/Navbar"
import "./Page.css"

const Skills = () => {
  return (
    <div className="skills-section">
      <Navbar />
        <div className="skills" data-aos="flip-right">My Skills</div>
        
        <div className="skill1">
            <div className="skill-1"data-aos="flip-right" >HTML</div>
            <div className="my-skill1"data-aos="flip-right" >
            </div>
            </div>
            <br />
            <br />
            <div className="skill2">
            <div className="skill-2" data-aos="flip-right">CSS</div>
            <div className="my-skill2" data-aos="flip-right" >
            </div>
            </div>
            <br />
            <br />
            <div className="skill3">
            <div className="skill-3"data-aos="flip-right" >TypeScript</div>
            <div className="my-skill3" data-aos="flip-right" >
            </div>
            </div>
            <br />
            <br />
            <div className="skill4">
            <div className="skill-4" data-aos="flip-right">NextJs</div>
            <div className="my-skill4" data-aos="flip-right" >
            </div>
            </div>
            </div>
  )
}

export default Skills
