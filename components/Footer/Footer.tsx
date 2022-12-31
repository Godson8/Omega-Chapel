import Image from "next/image";
import Link from "next/link";
import { IoCallSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#131825] mt-16 md:mt-[134px] text-white">
      <div className="container space-y-14 text-white pb-16 md:pb-28">
        <div className="space-y-8 md:space-y-0 md:space-x-24 flex justify-center flex-col md:flex-row pt-16 md:pt-28 md:justify-items-center">
          <div className="space-y-8 max-w-xs">
            <Link href="/">
              <div className="relative cursor-pointer flex items-center space-x-2">
                <Image src="/logo.png" alt="Logo" height={28} width={28} />
                <p className="text-xl font-bold text-white">Omega Chapel</p>
              </div>
            </Link>
            <div className="flex space-x-4">
              <div className="cursor-pointer">
                <Link href="https://www.facebook.com/Omega-Chapel-106683021365817">
                  <div className="flex justify-center items-center h-8 w-8 border rounded-full">
                    <FaFacebookF color="white" size={12} />
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="https://www.instagram.com/omega.chapel/">
                  <div className="flex justify-center items-center h-8 w-8 border rounded-full">
                    <FaInstagram color="white" size={12} />
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="https://www.youtube.com/@omegachapel">
                  <div className="flex justify-center items-center h-8 w-8 border rounded-full">
                    <AiFillYoutube color="white" size={12} />
                  </div>
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="https://www.facebook.com/OmegaBelieversGotTalent">
                  <div className="flex justify-center items-center h-8 w-8 border rounded-full">
                    <FaFacebookF color="white" size={12} />
                  </div>
                </Link>
              </div>
            </div>
            <p className="text-sm text-white">hello@omegachapel.org</p>
            <div className="space-y-8 text-white">
              <div className="space-y-2">
                <h4 className="text-md font-semibold">Lagos, Nigeria</h4>
                <p className="text-sm">3b, Boundary road, Akowonjo, Lagos.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-md font-semibold">Ota, Nigeria</h4>
                <p className="text-sm">
                  Dickson Omotayo crescent, behind town hall opposite AUD Ota.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-md font-semibold">Ilogbo, Nigeria</h4>
                <p className="text-sm">
                  No 18, asenuga crescent, iyamala bus stop, off Ilogbo road,
                  Ilogbo Ogun State.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-md font-semibold">Manchester, UK</h4>
                <p className="text-sm">
                  32, Ivy Street, off Moston lane, Manchester M40 9LN.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-y-0 md:gap-x-24">
            <div className="flex flex-col space-y-8">
              <div className="text-[#eee] flex-col space-y-3">
                <h4 className="text-md font-semibold">About</h4>
                <Link href="/our-mission">
                  <p className="cursor-pointer text-sm">Our Mission</p>
                </Link>
                <Link href="/our-beliefs">
                  <p className="cursor-pointer text-sm">Our Beliefs</p>
                </Link>
                <Link href="/our-leadership">
                  <p className="cursor-pointer text-sm">Our Leadership</p>
                </Link>
                <Link href="/our-schedule">
                  <p className="cursor-pointer text-sm">Our Schedule</p>
                </Link>
              </div>
              <div className="text-[#eee] flex-col space-y-3">
                <h4 className="text-md font-semibold">Media</h4>
                <Link href="/sermons">
                  <p className="cursor-pointer text-sm">Sermons</p>
                </Link>
                <Link href="/music">
                  <p className="cursor-pointer text-sm">Music</p>
                </Link>
                {/* <Link href="/">
            <p className="cursor-pointer text-sm">Pictures</p>
          </Link> */}
              </div>
            </div>
            <div className="flex flex-col space-y-8">
              <div className="text-[#eee] flex-col space-y-3">
                <h4 className="text-md font-semibold">Locations</h4>
                <Link href="/locations/nigeria">
                  <p className="cursor-pointer text-sm ">Nigeria</p>
                </Link>
                <Link href="/locations/united-kingdom">
                  <p className="cursor-pointer text-sm">United Kingdom</p>
                </Link>
                <Link href="/locations/canada">
                  <p className="cursor-pointer text-sm">Canada</p>
                </Link>
              </div>
              <div className="text-[#eee] flex-col space-y-3">
                <h4 className="text-md font-semibold">Contact</h4>
                <Link href="/contact">
                  <p className="cursor-pointer text-sm">Contact Us</p>
                </Link>
              </div>
            </div>

            <div>
              <div className="text-[#eee] flex-col space-y-3">
                <h4 className="text-md font-semibold">Generations</h4>
                <Link href="/youths">
                  <p className="cursor-pointer text-sm">Youths</p>
                </Link>
                <Link href="/kiddies">
                  <p className="cursor-pointer text-sm">Kiddies</p>
                </Link>
                <Link href="">
                  <p className="cursor-pointer text-sm">Men of David</p>
                </Link>
                <Link href="">
                  <p className="cursor-pointer text-sm">Women of honour</p>
                </Link>
                <Link href="">
                  <p className="cursor-pointer text-sm">Singles</p>
                </Link>
                <Link href="">
                  <p className="cursor-pointer text-sm">Young Couples</p>
                </Link>
                <Link href="">
                  <p className="cursor-pointer text-sm">Samuel’s company</p>
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              <div className="text-[#eee] flex-col space-y-3">
                <h4 className="text-md font-semibold">Finance</h4>
                <Link href="/giving">
                  <p className="cursor-pointer text-sm">Giving</p>
                </Link>
              </div>
              <div className="text-[#eee] flex-col space-y-3">
                <h4 className="text-md font-semibold">Legal</h4>
                <Link href="/">
                  <p className="cursor-pointer text-sm">Privacy Policy</p>
                </Link>
                <Link href="/">
                  <p className="cursor-pointer text-sm">Terms of Use</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-sm text-center">
          All rights Reserved. &copy; {year} Omega Chapel International
          Churches.
        </p>
      </div>
    </div>
  );
};

export default Footer;
