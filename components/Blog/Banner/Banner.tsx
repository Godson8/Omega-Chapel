import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsPlay, BsYoutube } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Link from "next/link";

const Banner = ({ negHeight, noBg }: any) => {
  const iconColor = noBg ? "#333333" : "white";

  return (
    <div className="container z-10 relative">
      <div
        className={`${noBg === true ? "bg-none" : "bg-[#333333]"} ${
          negHeight === false ? "-mt-0" : "-mt-20"
        } px-5 py-10 md:p-20 flex flex-row justify-around`}
      >
        <Link href="/giving">
          <div className="flex flex-col items-center justify-between cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
            <div>
              <RiMoneyDollarCircleLine color={iconColor} size={20} />
            </div>
            <p
              className={`${
                noBg === true ? "" : "text-white"
              } text-xs md:text-sm`}
            >
              Give now
            </p>
          </div>
        </Link>
        <Link href="https://www.youtube.com/@omegachapel?sub_confirmation=1">
          <div className="flex flex-col items-center justify-between cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
            <div>
              <BsYoutube color={iconColor} size={18} />
            </div>
            <p
              className={`${
                noBg === true ? "" : "text-white"
              } text-xs md:text-sm`}
            >
              Subscribe
            </p>
          </div>
        </Link>

        <div className="flex flex-col items-center justify-between">
          <div className="flex space-x-2">
            <div className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
              <Link href="https://www.instagram.com/omega.chapel/">
                <FaInstagram color={iconColor} size={16} />
              </Link>
            </div>
            <div className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
              <Link href="https://www.facebook.com/Omega-Chapel-106683021365817">
                <FaFacebookF color={iconColor} size={16} />
              </Link>
            </div>
          </div>
          <p
            className={`${
              noBg === true ? "" : "text-white"
            } text-xs md:text-sm`}
          >
            Follow us
          </p>
        </div>
        <Link href="https://www.youtube.com/@omegachapel/videos">
          <div className="md:flex md:flex-col md:items-center justify-between hidden cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out">
            <div>
              <BsPlay color={iconColor} size={20} />
            </div>
            <p
              className={`${
                noBg === true ? "" : "text-white"
              } text-xs md:text-sm`}
            >
              Watch now
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
