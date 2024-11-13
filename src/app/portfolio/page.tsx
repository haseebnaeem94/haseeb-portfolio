import "./page.css"
import Navbar from "@/Components/Navbar"
import Image from "next/image"
import image1 from "../../../public/project 1 image.png"
import image2 from "../../../public/resume image.png"
import Link from "next/link"

const Portfolio = () => {
  return (
    <div className="projects">
        <Navbar />
        <div className="my-projects" data-aos="flip-right">My Projects</div>
        <div className="portfolio">
        <div className="project-1 ">
            <div className="project1-image">
                <Image src={image1} alt="ecommerce project" data-aos="flip-right"/>
                <p className="project-desc">This is a E-commerce store project developed by using HTML and CSS</p>
                <p className="view-1"><Link href="https://ecommerce-store-project-zeta.vercel.app/">View my Project</Link></p>
            </div>
        </div>
        <div className="project-2 ">
            <div className="project2-image">
                <Image src={image2} alt="resume builder" data-aos="flip-right" />
                <p className="project2-desc">This is an interactive resume builder project developed by using HTML and CSS</p>
                <p className="view-2"><Link href="https://dynamic-resume-mocha.vercel.app/">View my Project</Link></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Portfolio
