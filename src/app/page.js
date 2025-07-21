"use client";


import { About } from "@/components/About";
import { Certaficat } from "@/components/Certaficat";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { Resume } from "@/components/Resume";

export default function Home() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <About/>
      <Resume/>
      <div id="Certaficat">
      <Certaficat/>
      </div>
      <Contact/>
      <Footer/>

    

      
    </>

  );
}

