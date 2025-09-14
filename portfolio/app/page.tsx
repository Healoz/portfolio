"use client";
import Image from "next/image";
import Keyboard from "./components/HeroComponents/Keyboard";
import Hero from "./components/HeroComponents/Hero";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMeComponents/AboutMe";
import { useEffect } from "react";
import Skills from "./components/SkillsComponents/Skills";

export default function Home() {
  // getting smooth scroll
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  return (
    <div className="bg-sand text-black h-screen">
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}
