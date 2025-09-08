"use client";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollingText = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Wait for layout to settle, then measure and animate
    setTimeout(() => {
      setupInfiniteScroll();
      animateIcons();
    }, 100);
  }, []);

  const setupInfiniteScroll = () => {
    if (scrollContainerRef.current) {
      // Measure the exact width of the first set
      const firstChild = scrollContainerRef.current.children[0] as HTMLElement;
      const exactWidth = firstChild.getBoundingClientRect().width;

      gsap.set(scrollContainerRef.current, { x: 0 });

      gsap.to(scrollContainerRef.current, {
        x: -exactWidth, // Move by exact width of one set
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }
  };

  // rotate stars right
  const animateIcons = () => {
    gsap.to(".star-icon", {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    console.log("icon animation set up");
  };

  const textPattern = (
    <div className="flex items-center flex-shrink-0">
      <h1 className="font-extrabold font-heading text-primary-orange whitespace-nowrap">
        Web Developer
      </h1>
      <FontAwesomeIcon
        icon={faStar}
        className="text-primary-orange flex-shrink-0 m-4 star-icon"
      />
      <h1 className="font-extrabold font-heading text-primary-orange whitespace-nowrap">
        UI Designer
      </h1>
      <FontAwesomeIcon
        icon={faStar}
        className="text-primary-orange flex-shrink-0 m-4 star-icon"
      />
      <h1 className="font-extrabold font-heading text-primary-orange whitespace-nowrap">
        Creative Coder
      </h1>
      <FontAwesomeIcon
        icon={faStar}
        className="text-primary-orange flex-shrink-0 m-4 star-icon"
      />
    </div>
  );

  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollContainerRef} className="flex text-4xl md:text-5xl">
        {textPattern}
        {textPattern}
        {textPattern}
        {textPattern}
      </div>
    </div>
  );
};

export default ScrollingText;
