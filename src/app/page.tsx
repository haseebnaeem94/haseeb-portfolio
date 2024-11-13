"use client"


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();

  }, []);
  return (
    <div>
      <Navbar />
      <Hero/>
    </div>
  );
}
