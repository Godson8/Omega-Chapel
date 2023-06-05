import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Share = ({ title }: any) => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(true);
  };

  return (
    <div className="md:max-w-[350px] flex flex-col items-center space-y-3 justify-self-center p-3 rounded-xl border bg-primary shadow-nav">
      {showDiv ? (
        <div className="px-5">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-white text-base">Share this article</p>
            <div>
              <div className="flex space-x-4">
                <div className="cursor-pointer">
                  <Link href="https://www.facebook.com/Omega-Chapel-106683021365817">
                    <div className="flex justify-center items-center h-7 w-7 border rounded-full">
                      <FaFacebookF color="white" size={12} />
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="https://www.instagram.com/omega.chapel/">
                    <div className="flex justify-center items-center h-7 w-7 border rounded-full">
                      <FaInstagram color="white" size={12} />
                    </div>
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="https://www.instagram.com/omega.chapel/">
                    <div className="flex justify-center items-center h-7 w-7 border rounded-full">
                      <FaTwitter color="white" size={12} />
                    </div>
                  </Link>
                </div>

                <div className="cursor-pointer">
                  <div className="flex justify-center items-center h-7 w-7 ">
                    <p className="text-white text-[8px] text-center">
                      COPY LINK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="text"
            className="p-2 text-xs  bg-primary text-white w-full focus:border focus:outline-none focus:border-primary rounded-md"
            readOnly
            value={`https://www.omegachapel.org/blog/post/${title}`}
          />
        </div>
      ) : (
        <>
          <p className="text-center text-white">
            Know someone who needs to read this article?
          </p>

          <button
            className="bg-[#FF671F] text-white text-sm px-[18px] py-3 font-bold w-fit rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
            onClick={handleClick}
          >
            SHARE THIS ARTICLE
          </button>
        </>
      )}
    </div>
  );
};

export default Share;
