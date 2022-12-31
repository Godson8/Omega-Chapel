import Link from "next/link";
import { IoCallSharp, IoMail } from "react-icons/io5";

const ContactShort = () => {
  return (
    <div className=" flex flex-col items-center md:flex-row md:space-x-32 space-y-4 md:space-y-0">
      <Link href="/">
        <div className="flex space-x-2 items-center cursor-pointer">
          <IoCallSharp size={25} color="#3C64B1" />
          <p className="text-2xl font-extralight">+234 703 842 3282</p>
        </div>
      </Link>
      <Link href="/">
        <div className="flex space-x-2 items-center cursor-pointer">
          <IoMail size={25} color="#3C64B1" />
          <p className="text-2xl font-extralight">hello@omegachapel.org</p>
        </div>
      </Link>
    </div>
  );
};

export default ContactShort;
