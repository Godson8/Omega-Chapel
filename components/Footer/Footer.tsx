import Image from "next/image";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F] mt-16 md:mt-[134px] text-white">
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-5 text-white py-12 md:py-16 md:justify-items-center">
        <div className="space-y-3">
          <Link href="/">
            <div className="w-8 h-8 relative cursor-pointer">
              <Image src="/logo.png" alt="Logo" layout="fill" />
            </div>
          </Link>
          <div className="text-[#eee] flex-col space-y-1">
            <h1 className="font-bold text-base">About</h1>
            <Link href="/our-mission">
              <p className="cursor-pointer">Our Mission</p>
            </Link>
            <Link href="/our-beliefs">
              <p className="cursor-pointer">Our Beliefs</p>
            </Link>
            <Link href="/our-leadership">
              <p className="cursor-pointer">Our Leadership</p>
            </Link>
            <Link href="/our-schedule">
              <p className="cursor-pointer">Our Schedule</p>
            </Link>
          </div>
        </div>
        <div className="text-[#eee] flex-col space-y-1">
          <h1 className="font-bold text-base">Media</h1>
          <Link href="/sermons">
            <p className="cursor-pointer">Sermons</p>
          </Link>
          <Link href="/music">
            <p className="cursor-pointer">Music</p>
          </Link>
          {/* <Link href="/">
            <p className="cursor-pointer">Pictures</p>
          </Link> */}
        </div>
        <div className="space-y-5">
          <div className="text-[#eee] flex-col space-y-1">
            <h1 className="font-bold text-base">Locations</h1>
            <Link href="/locations/nigeria">
              <p className="cursor-pointer">Nigeria</p>
            </Link>
            <Link href="/locations/united-kingdom">
              <p className="cursor-pointer">United Kingdom</p>
            </Link>
            <Link href="/locations/canada">
              <p className="cursor-pointer">Canada</p>
            </Link>
          </div>
          <div className="text-[#eee] flex-col space-y-1">
            <h1 className="font-bold text-base">Contact</h1>
            <Link href="/">
              <div className="flex space-x-2 items-center cursor-pointer">
                <IoCallSharp />
                <p>+2347015556339</p>
              </div>
            </Link>
            <Link href="/">
              <div className="flex space-x-2 items-center cursor-pointer">
                <IoMail />
                <p>+2347015556339</p>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="text-[#eee] flex-col space-y-1">
            <h1 className="font-bold text-base">Generations</h1>
            <Link href="/">
              <p className="cursor-pointer">Omega Youths</p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer">Omega Kids</p>
            </Link>
          </div>
        </div>
        <div className="space-y-5">
          <div className="text-[#eee] flex-col space-y-1">
            <h1 className="font-bold text-base">Finance</h1>
            <Link href="/">
              <p className="cursor-pointer">Giving</p>
            </Link>
          </div>
          <div className="text-[#eee] flex-col space-y-1">
            <h1 className="font-bold text-base">Legal</h1>
            <Link href="/">
              <p className="cursor-pointer">Privacy Policy</p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer">Terms of Use</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
