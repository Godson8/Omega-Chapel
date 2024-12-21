import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

interface props {
  title: ReactNode;
  subTitle1?: string;
  subTitle2?: string;
  image?: string;
}

const PageHeader = ({ title, subTitle1, subTitle2, image }: props) => {
  const backgroundRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    const el = backgroundRef.current;
    const el2 = textRef.current;
    gsap.to(el, {
      scrollTrigger: {
        scrub: 1,
      },
      //   scale: 1.5,
      y: 80,
      opacity: 0.2,
    });
    gsap.to(el2, {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 1.1,
    });
  }, []);

  return (
    <div className="h-[194px] w-full md:h-[560px] rounded-xl relative overflow-hidden">
      <div className="relative w-full h-full bg-tertiary" ref={textRef}>
        <Image
          src={`/${image}`}
          layout="fill"
          alt={image}
          className="object-cover opacity-60 object-right-top"
        />
      </div>
      <div className="text-xs font-bold absolute top-4 left-4 md:top-8  md:left-8 flex items-center space-x-2 text-secondary">
        <p>{subTitle1}</p> <GoDotFill color="#3C64B1" /> <p>{subTitle2}</p>
      </div>
      <div
        className="w-full absolute top-[30%] left-1/2 -translate-x-1/2 flex-col items-center space-y-4 md:space-y-14"
        ref={backgroundRef}
      >
        <h1 className="text-[24px] md:text-[60px] font-black text-center">
          {title}
        </h1>
        <div className="flex space-x-8 justify-center">
          <div className="cursor-pointer">
            <Link href="https://www.youtube.com/@omegachapel">
              <div className="flex justify-center items-center h-8 w-8 bg-primary rounded-full">
                <AiFillYoutube size={15} color="white" />
              </div>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="https://www.instagram.com/omega.chapel/">
              <div className="flex justify-center items-center h-8 w-8 bg-primary rounded-full">
                <FaInstagram size={15} color="white" />
              </div>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="https://www.facebook.com/Omega-Chapel-106683021365817">
              <div className="flex justify-center items-center h-8 w-8 bg-primary rounded-full">
                <FaFacebookF size={15} color="white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
