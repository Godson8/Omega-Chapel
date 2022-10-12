import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const [showAbout, setShowAbout] = useState<Boolean>(false);
  const [showMedia, setShowMedia] = useState<Boolean>(false);
  const [showGenerations, setShowGenerations] = useState<Boolean>(false);

  const [navBar, setNavBar] = useState(false);

  const showNavBar = () => {
    if (window.scrollY >= 67) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showNavBar);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMobileMenu = () => {
    setToggle(!toggle);
  };

  const openAbout = () => {
    setShowAbout(!showAbout);
  };

  const openMedia = () => {
    setShowMedia(!showMedia);
  };

  const openGenerations = () => {
    setShowGenerations(!showGenerations);
  };

  const navLinkStyles = ({ isActive }: { isActive: any }) => {
    return {
      color: isActive && "#649AE9",
    };
  };
  return (
    <nav
      className={`${
        navBar && "shadow-nav"
      } bg-white sticky top-0  z-[99999] w-full`}
    >
      <div className="container z-30 bg-white">
        <div className="bg-white w-full flex justify-between items-center h-[67px]">
          <Link href="/">
            <div className="w-8 h-8 relative cursor-pointer">
              <Image src="/logo.png" alt="Logo" layout="fill" />
            </div>
          </Link>

          <div
            className="flex justify-center items-center w-8 h-8 cursor-pointer md:hidden"
            onClick={handleToggle}
          >
            <div
              className={`w-7 h-1 before:bg-primary after:bg-primary rounded-full before:content-[''] after:content-[''] before:absolute after:absolute before:rounded-full after:rounded-full before:w-7  after:w-7 before:h-1 after:h-1 transition after:transition before: ease-in-out after:ease-in-out before:duration-500 after:duration-500
                    ${
                      !toggle
                        ? " bg-primary before:-translate-y-2.5 after:translate-y-2.5"
                        : " bg-transparent  before:rotate-45 after:-rotate-45"
                    }`}
            ></div>
          </div>

          <div
            className={` mobile:absolute mobile:w-full  mobile:bg-white mobile:right-0 mobile:transition-all mobile:ease-in-out mobile:-z-10 mobile:shadow-nav
                  ${
                    toggle
                      ? " mobile:top-16 mobile:duration-700 mobile:overflow-y-scroll max-h-screen mobile:border-t mobile:border-opacity-30  mobile:border-solid"
                      : " mobile:-top-[650px]  mobile:duration-500 "
                  }`}
          >
            {/* <ul className="mobile:bg-white  mobile:h-full mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:p-20 mobile:shadow-nav  md:h-16 md:flex md:items-center md:pt-0 md:z-20 text-sm md:space-x-8 mobile:space-y-[25px]">
              <li className="cursor-pointer font-medium text-primary ">
                About
              </li>

              <li className="cursor-pointer font-medium text-primary ">
                About
              </li>
            </ul> */}
            <ul className=" flex space-x-8 mobile:hidden text-sm text-primary ">
              <li
                className="w-full relative"
                onMouseEnter={openAbout}
                onMouseLeave={() => setShowAbout(false)}
              >
                <div className="cursor-pointer">About</div>
                <div
                  className={`${
                    !showAbout && "hidden"
                  }  w-96 absolute bg-white shadow-nav p-4 -translate-x-1/2 rounded-xl divide-y-[0.5px] divide-primary divide-opacity-20 divide-dashed`}
                >
                  <h1 className="text-xs pb-2 ">Who are we?</h1>
                  <div
                    className={`${
                      !showAbout && "hidden"
                    }  grid grid-cols-2 gap-y-1 gap-x-2 `}
                  >
                    <Link href="/our-mission">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm">Our Mission</h1>
                        <p className="text-xs">
                          Get to find out who our esteemed leaders are
                        </p>
                      </div>
                    </Link>
                    <Link href="/our-leadership">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm">Our Leadership</h1>
                        <p className="text-xs">
                          Get to find out who our esteemed leaders are
                        </p>
                      </div>
                    </Link>
                    <Link href="/our-beliefs">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm">Our Beliefs</h1>
                        <p className="text-xs">
                          Get to find out who our esteemed leaders are
                        </p>
                      </div>
                    </Link>
                    <Link href="/our-schedule">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm">Our Schedule</h1>
                        <p className="text-xs">
                          Get to find out who our esteemed leaders are
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              <li
                className="w-full h-full relative"
                onMouseEnter={openMedia}
                onMouseLeave={() => setShowMedia(false)}
              >
                <div className="cursor-pointer">Media</div>
                <div
                  className={`${
                    !showMedia && "hidden"
                  }  w-96 absolute bg-white shadow-nav p-4 -translate-x-1/2 rounded-xl divide-y-[0.5px] divide-primary divide-opacity-20 divide-dashed`}
                >
                  <h1 className="text-xs pb-2">The Omega Media</h1>
                  <div
                    className={`${
                      !showMedia && "hidden"
                    }  grid grid-cols-2 gap-y-1 gap-x-2 `}
                  >
                    <Link href="/sermons">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm">Sermons</h1>
                        <p className="text-xs">
                          Get to find out who our esteemed leaders are
                        </p>
                      </div>
                    </Link>
                    <Link href="/music">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm">Music</h1>
                        <p className="text-xs">
                          Get to find out who our esteemed leaders are
                        </p>
                      </div>
                    </Link>
                    {/* <Link href="/pictures">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm">Pictures</h1>
                        <p className="text-xs">
                          Get to find out who our esteemed leaders are
                        </p>
                      </div>
                    </Link> */}
                  </div>
                </div>
              </li>
              <li
                className="w-full h-full relative"
                onMouseEnter={openGenerations}
                onMouseLeave={() => setShowGenerations(false)}
              >
                <div className="cursor-pointer">Generations</div>
                <div
                  className={`${
                    !showGenerations && "hidden"
                  }  w-96 absolute bg-white shadow-nav p-4 -translate-x-1/2 rounded-xl divide-y-[0.5px] divide-primary divide-opacity-20 divide-dashed`}
                >
                  <h1 className="text-xs pb-2">Omega Generations</h1>
                  <div
                    className={`${
                      !showGenerations && "hidden"
                    }  grid grid-cols-2 gap-x-2 `}
                  >
                    <Link href="/youths">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm">Youths</h1>
                        <p className="text-xs">
                          Get to find out who our esteemed leaders are
                        </p>
                      </div>
                    </Link>
                    <Link href="/kids">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm">Kids</h1>
                        <p className="text-xs">
                          Get to find out who our esteemed leaders are
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/locations">Locations</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li className="text-secondary font-bold">
                <Link href="/give">Give</Link>
              </li>
            </ul>
            <div
              className={`container divide-y-[0.5px] divide-primary divide-opacity-20 divide-dashed pb-8 md:hidden h-full ${
                toggle && "mb-10"
              }`}
            >
              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">ABOUT</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/our-mission" className="text-sm">
                    <p onClick={handleToggle}>Our Mission</p>
                  </Link>
                  <Link href="/our-beliefs" className="text-sm">
                    <p onClick={handleToggle}>Our Beliefs</p>
                  </Link>
                  <Link href="/our-leadership" className="text-sm">
                    <p onClick={handleToggle}>Our Leadership</p>
                  </Link>
                  <Link href="/our-schedule" className="text-sm">
                    <p onClick={handleToggle}>Our Schedule</p>
                  </Link>
                </div>
              </div>

              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">MEDIA</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/sermons" className="text-sm">
                    <p onClick={handleToggle}>Sermons</p>
                  </Link>
                  <Link href="/music" className="text-sm">
                    <p onClick={handleToggle}>Music</p>
                  </Link>
                  {/* <Link href="/pictures" className="text-sm">
                    <p onClick={handleToggle}>Pictures</p>
                  </Link> */}
                </div>
              </div>
              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">GENERATIONS</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/youths" className="text-sm">
                    <p onClick={handleToggle}>Youths</p>
                  </Link>
                  <Link href="/kids" className="text-sm">
                    <p onClick={handleToggle}>Kids</p>
                  </Link>
                </div>
              </div>

              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">LOCATIONS</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/locations" className="text-sm">
                    <p onClick={handleToggle}>Locations</p>
                  </Link>
                </div>
              </div>

              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">CONTACT</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/contact" className="text-sm">
                    <p onClick={handleToggle}>Contact</p>
                  </Link>
                </div>
              </div>

              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">GIVE</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/give" className="text-sm">
                    <p onClick={handleToggle}>Give</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
