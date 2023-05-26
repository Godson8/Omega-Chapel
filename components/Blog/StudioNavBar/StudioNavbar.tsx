import Image from "next/image";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

const StudioNavBar = (props: any) => {
  return (
    <nav className={"shadow-nav bg-white sticky top-0  z-[99999] w-full"}>
      <div className="container z-30 bg-white">
        <div className="bg-white w-full flex justify-between items-center h-[67px]">
          <Link href="/">
            <div className="relative cursor-pointer flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo" height={28} width={28} />
              <h1 className="text-xl font-primary font-bold">BLOG</h1>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex space-x-1 items-center">
              <div>
                <TbArrowBackUp size={18} />
              </div>
              <p>Go To website</p>
            </div>
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </nav>
  );
};

export default StudioNavBar;
