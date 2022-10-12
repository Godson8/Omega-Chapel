import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const backgroundRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const el = backgroundRef.current;
    gsap.to(el, {
      scrollTrigger: {
        scrub: 1,
      },
      //   scale: 1.5,
      y: 780,
      opacity: 0.2,
    });
  }, []);
  return (
    <div className="relative w-full h-full overflow-hidden object-cover ">
      <video
        autoPlay
        loop
        muted
        className="w-full h-screen overflow-hidden object-cover"
      >
        <source src="/header.mp4" />
      </video>
      {/* <Image src="/hero.png" layout="fill" className="object-cover" /> */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 px-2"
        ref={backgroundRef}
      >
        <h1 className="text-[48px] font-black text-white text-center w-96">
          Omega Chapel
        </h1>
        <p className="font-extrabold text-white text-center">Welcome Home</p>
      </div>
    </div>
  );
};

export default Hero;
