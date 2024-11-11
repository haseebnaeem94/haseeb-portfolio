"use client"

import "./Hero.css"
import Image from "next/image"
import Typewriter from 'typewriter-effect';
import image1 from "../../public/haseeb 123.png"



const Hero = () => {
  return (
    <div className="hero-section">
        <div className="hero1 hero">
            <div className="hero1-image">
                <Image src={image1} alt="haseeb" data-aos="flip-right" />
            </div>
            
        </div>
        <div className="hero2 hero">
            <div className="hero2-image">
              Hey Meet me I am Haseeb Naeem
            
            <Typewriter
  options={{
    strings: ['Web Developer', 'SEO Expert'],
    autoStart: true,
    loop: true,
  }}
/>
            </div>
        </div>
      
    </div>
  )
}

export default Hero