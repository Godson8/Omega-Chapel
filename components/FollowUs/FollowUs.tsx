import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const FollowUs = () => {
  return (
    <div className="container mt-16 md:mt-[100px] space-y-20 flex flex-col items-center">
      <h1 className="text-[32px] font-bold text-center">
        Follow us on Social Media
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-6 md:gap-y-0 md:gap-4 justify-items-center max-w-[500px] w-full">
        <div className="cursor-pointer">
          <Link href="/">
            <div className="space-y-4">
              <div className="flex justify-center items-center h-16 w-16 bg-tertiary rounded-full">
                <AiFillYoutube size={25} color="#FF0000" />
              </div>
              <p className="text-sm">YouTube</p>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="/">
            <div className="space-y-4">
              <div className="flex justify-center items-center h-16 w-16 bg-tertiary rounded-full">
                <FaInstagram size={25} color="#E1306C" />
              </div>
              <p className="text-sm">Instagram</p>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="/">
            <div className="space-y-4">
              <div className="flex justify-center items-center h-16 w-16 bg-tertiary rounded-full">
                <FaFacebookF size={25} color="#4267B2" />
              </div>
              <p className="text-sm">Facebook</p>
            </div>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="/">
            <div className="space-y-4">
              <div className="flex justify-center items-center h-16 w-16 bg-tertiary rounded-full">
                <FaFacebookF size={25} color="#4267B2" />
              </div>
              <p className="text-sm text-center">
                Facebook
                <br />
                (Youths)
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
