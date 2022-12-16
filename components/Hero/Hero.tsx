import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const backgroundRef = useRef(null);
  const textRef = useRef(null);
  const vidRef = useRef();
  useEffect(() => {
    // vidRef.current.play();
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
    <div className="relative w-full h-screen overflow-hidden object-cover ">
      <video
        // ref={vidRef}
        src="/header.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen overflow-hidden object-cover xs:hidden xsOpp:block"
      />
      <div className="absolute top-0 left-0 xsOpp:hidden xs:block w-full h-screen">
        <Image
          src="/header.gif"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 px-2"
        ref={backgroundRef}
      >
        <h1 className="text-[48px] font-black text-white text-center w-96">
          Omega Chapel
        </h1>
        <p className="font-extrabold text-white text-center text-lg">
          Welcome Home
        </p>
      </div>
    </div>
  );
};

export default Hero;
