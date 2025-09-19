import React, { useEffect } from "react";
import Title from "../Title";
import Paragraph from "../Paragraph";
import Highlight from "../Highlight";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContentContainer from "../ContentContainer";

const AboutMe = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".face-image",
      {
        x: 600, // Start position (off to the right)
        opacity: 0,
      },
      {
        x: 0, // End position (normal position)
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-me-container",
          start: "top bottom", // Start when top of trigger hits bottom of viewport
          end: "center center", // End when bottom of trigger hits top of viewport
          toggleActions: "play none none reverse",
          scrub: 1, // Smooth scrubbing with 1 second lag
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const funkyEffect = (
    <div className="text-3xl ml-8">
      <h3 className="font-thin scale-x-[1] origin-left">ABOUT ME</h3>
      <h3 className="scale-x-[0.95] origin-left">ABOUT ME</h3>
      <h3 className="font-semibold scale-x-[0.92] origin-left">ABOUT ME</h3>
      <h3 className="font-bold scale-x-[0.87] origin-left">ABOUT ME</h3>
      <h3 className="font-extrabold scale-x-[0.82] origin-left">ABOUT ME</h3>
    </div>
  );
  return (
    <ContentContainer backgroundColour="sand">
      <div className="flex-col lg:flex-row w-full flex bg-sand about-me-container">
        <div className="w-full lg:w-1/2 flex flex-col gap-10 max-w-2xl">
          <Title>About me</Title>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
            veritatis magnam vitae id, <Highlight>test</Highlight> iste totam
            fugit natus veniam. Ea ab eum, similique reprehenderit officiis
            facilis voluptas in nam ratione ut rem deleniti commodi quasi! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            <Highlight>Quod</Highlight> veritatis magnam vitae id, iste totam
            fugit natus veniam. Ea ab eum, similique reprehenderit officiis
            facilis voluptas in nam ratione ut rem deleniti commodi quasi!
          </Paragraph>
        </div>
        <div className="h-full flex items-end mb-20">{funkyEffect}</div>
        <div className="w-full lg:flex-1 mt-6 lg:mt-0 face-image">
          <img
            src={`/ME.png`}
            className="h-auto w-full lg:h-full max-h-[500px] object-contain "
          />
        </div>
      </div>
    </ContentContainer>
  );
};

export default AboutMe;
