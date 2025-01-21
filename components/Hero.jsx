"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
  const letterRef = useRef([]);
  const odysseyRef = useRef(null);
  const outerDivRef = useRef(null);
  const innerDivRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/astro1.jpg", "/astro3.jpeg", "/astro5.jpg"];

  useEffect(() => {
    const tl = gsap.timeline();

    const changeSlide = () => {
      tl.to(innerDivRef.current, {
        x: "-100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentImageIndex((prev) => (prev + 1) % images.length);
          gsap.set(innerDivRef.current, { x: "100%" });
        },
      }).to(innerDivRef.current, {
        x: "0%",
        duration: 1,
        ease: "power2.inOut",
      });
    };

    const interval = setInterval(changeSlide, 5000);
    changeSlide();

    tl.to(letterRef.current, {
      duration: 1,
      x: 0,
      opacity: 1,
      stagger: 0.1,
    })
      .to(odysseyRef.current, {
        duration: 1,
        x: 0,
        opacity: 1,
      })
      .to(outerDivRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scale: 1,
      });

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="w-full min-h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/astro4.jpeg)" }}
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center top-0 z-[4]"
        style={{ backgroundImage: "url(/astronobg.png)" }}
      />

      <div className="absolute overflow-hidden top-[5vh] md:top-[4vh] lg:top-[-5vh] right-0 inline-flex">
        <div className="text-[25vw] md:text-[20vw] lg:text-[300px] font-bold text-white flex flex-col md:top-[5vh] md:pr-[1vh] top-[5vh]">
          <div className="flex">
            {"OCEAN".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block opacity-0 translate-x-[200px]"
                ref={(el) => (letterRef.current[index] = el)}
              >
                {letter}
              </span>
            ))}
          </div>
          <h3
            ref={odysseyRef}
            className="text-[14vw] md:text-[9vw] lg:text-8xl font-semibold opacity-0 translate-x-[200px] text-white absolute bottom-[-3vh] md:bottom-[-2vh] lg:bottom-0 right-0 md:pr-[1vh]"
          >
            ODYSSEY
          </h3>
        </div>
      </div>

      <div
        ref={outerDivRef}
        className="absolute opacity-0 scale-[0.5] translate-y-[200px] bottom-[5vh] right-0 md:right-[10vw] lg:right-[18vw] flex overflow-hidden h-[20vh] md:h-[32vh] w-[90vw] md:w-[50vw] lg:w-[38vw] rounded-xl bg-white/10 backdrop-blur-lg"
      >
        <div ref={innerDivRef} className="absolute w-full h-full p-3">
          <Image
            src={images[currentImageIndex]}
            alt="astro"
            width={800}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 w-full h-full pr-[20%]">
            <h2 className="absolute top-[30%] left-[3%] max-w-[50%] md:max-w-[20%] text-[8vw] md:text-6xl lg:text-6xl font-bold text-white">
              THE BEST
            </h2>
            <h2 className="absolute top-[50%] right-[30%] md:right-[17%] lg:right-[8%] max-w-[50%] md:max-w-[20%] text-[6vw] md:text-4xl lg:text-4xl font-bold text-white">
              IN THE WORLD
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
