import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const FollowUs = () => {
  return (
    <div className="container mt-16 md:mt-[100px] space-y-20 flex flex-col items-center">
      <h1 className="text-[32px] font-bold text-center">
        Follow us on Social Media
      </h1>
      <div className="grid grid-cols-4 gap-3 gap-y-6 md:gap-y-0 md:gap-4 justify-items-center max-w-[500px] w-full">
        <div className="cursor-pointer">
          <Link href="https://www.youtube.com/@omegachapel">
            <div className="space-y-4">
              <div className="flex justify-center items-center h-12 w-12 bg-tertiary rounded-full">
                <AiFillYoutube size={17} color="#FF0000" />
              </div>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://www.instagram.com/omega.chapel/">
            <div className="space-y-4">
              <div className="flex justify-center items-center h-12 w-12 bg-tertiary rounded-full">
                <FaInstagram size={17} color="#E1306C" />
              </div>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://www.facebook.com/Omega-Chapel-106683021365817">
            <div className="space-y-4">
              <div className="flex justify-center items-center h-12 w-12 bg-tertiary rounded-full">
                <FaFacebookF size={17} color="#4267B2" />
              </div>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://www.facebook.com/OmegaBelieversGotTalent">
            <div className="space-y-4">
              <div className="flex justify-center items-center h-12 w-12 bg-tertiary rounded-full">
                <FaFacebookF size={17} color="#4267B2" />
              </div>
              <p className="text-sm text-center">(Youths)</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
