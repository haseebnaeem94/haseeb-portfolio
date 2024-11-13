import "./page.css"
import Image from "next/image"
import image4 from "../../../public/haseeb image 4.png"
import Navbar from "@/Components/Navbar"


const About = () => {
  return (
    <div className="about-section">
      <Navbar />
        <div className="about" data-aos="flip-right" >About Me
        </div>
        
        <div className="about1">
        <div className="about-1 ">
            <div className="about-image">
                <Image src={image4} alt="haseeb" data-aos="flip-right" />
                <p className="about-para" data-aos="flip-right">I am a dedicated Frontend developer with expertise in HTML, CSS, TypeScript, and NextJs. I hold Engineering degree in Electronics Engineering from Mehran University of Engineering and Technology Jamshoro with flying marks and currently pusuing Artifical Intelligence and Web 3 certification from GIAIC. I am also an SEO Expert with 3 years of Experience having strong understanding of search engine algorithms and ranking parameters. </p>
              </div>  
              
            </div>
            
        </div>
        

      
    </div>
    
  )
}

export default About
