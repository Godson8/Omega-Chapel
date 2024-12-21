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
                      : " mobile:-top-[750px]  mobile:duration-500 "
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
                <div className="cursor-pointer hover:text-secondary transition-colors">
                  About
                </div>
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
                        <h1 className="text-sm font-bold">Our Mission</h1>
                        <p className="text-xs">
                          What we are called to do and how we do it.
                        </p>
                      </div>
                    </Link>
                    <Link href="/our-leadership">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Our Leadership</h1>
                        <p className="text-xs">
                          Get to know our team of leaders
                        </p>
                      </div>
                    </Link>
                    <Link href="/our-beliefs">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Our Beliefs</h1>
                        <p className="text-xs">
                          What we know, believe and hold to be true
                        </p>
                      </div>
                    </Link>
                    <Link href="/our-partners">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Our Partners</h1>
                        <p className="text-xs">Get to Know our patners</p>
                      </div>
                    </Link>
                    <Link href="/our-schedule">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Our Schedule</h1>
                        <p className="text-xs">
                          Get to follow our events and programmes
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
                <div className="cursor-pointer hover:text-secondary transition-colors">
                  Media
                </div>
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
                    <Link href="http://www.youtube.com/@omegachapel" passHref>
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Sermons</h1>
                        <p className="text-xs">
                          How we preach and teach the Uncompromised word of God
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="https://www.youtube.com/playlist?list=PLiJLD9dPrcur6QNuif1oOBb6VuNwTMmuN"
                      passHref
                    >
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Music</h1>
                        <p className="text-xs">
                          Anointed Tunes in worship and praise of God
                        </p>
                      </div>
                    </Link>
                    <Link href="/blog">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Blog</h1>
                        <p className="text-xs">Writings of Power</p>
                      </div>
                    </Link>
                    {/* <Link href="/pictures">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Pictures</h1>
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
                <div className="cursor-pointer hover:text-secondary transition-colors">
                  Generations
                </div>
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
                        <h1 className="text-sm font-bold">Youths</h1>
                        <p className="text-xs">
                          Eagle’s nest: the fellowship of our youngsters.
                        </p>
                      </div>
                    </Link>
                    <Link href="/kiddies">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Kiddies</h1>
                        <p className="text-xs">
                          Our children are Mighty seeds: God’s heritage.
                        </p>
                      </div>
                    </Link>
                    <Link href="">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Men of David</h1>
                        <p className="text-xs">
                          Building pillars that hold the house.
                        </p>
                      </div>
                    </Link>
                    <Link href="">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Women of honour</h1>
                        <p className="text-xs">
                          Support for the unique needs of a woman.
                        </p>
                      </div>
                    </Link>
                    <Link href="">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Singles</h1>
                        <p className="text-xs">
                          Unmarried young adults in search of spouse and
                          success.
                        </p>
                      </div>
                    </Link>
                    <Link href="">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Young couples</h1>
                        <p className="text-xs">
                          Building a strong marriage and home for the Lord.
                        </p>
                      </div>
                    </Link>
                    <Link href="">
                      <div className="hover:bg-tertiary p-2 cursor-pointer">
                        <h1 className="text-sm font-bold">Samuel’s company</h1>
                        <p className="text-xs">
                          Special fellowship of minister’s kids.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="hover:text-secondary transition-all">
                <Link href="/locations">Locations</Link>
              </li>
              <li className="hover:text-secondary transition-all">
                <Link href="/our-partners">Partnership</Link>
              </li>
              <li className="hover:text-secondary transition-all">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="text-secondary font-bold hover:text-secondary transition-colors">
                <Link href="/giving">Giving</Link>
              </li>
            </ul>
            {/* MOBILE */}
            <div
              className={`container divide-y-[0.5px] divide-primary divide-opacity-20 divide-dashed pb-8 md:hidden h-full ${
                toggle ? "block mb-10" : "hidden"
              }`}
            >
              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">ABOUT</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/our-mission">
                    <p onClick={handleToggle} className="text-sm">
                      Our Mission
                    </p>
                  </Link>
                  <Link href="/our-beliefs">
                    <p onClick={handleToggle} className="text-sm">
                      Our Beliefs
                    </p>
                  </Link>
                  <Link href="/our-leadership">
                    <p onClick={handleToggle} className="text-sm">
                      Our Leadership
                    </p>
                  </Link>
                  <Link href="/our-partners">
                    <p onClick={handleToggle} className="text-sm">
                      Our Partners
                    </p>
                  </Link>
                  <Link href="/our-schedule">
                    <p onClick={handleToggle} className="text-sm">
                      Our Schedule
                    </p>
                  </Link>
                </div>
              </div>

              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">MEDIA</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="http://www.youtube.com/@omegachapel" passHref>
                    <p onClick={handleToggle} className="text-sm">
                      Sermons
                    </p>
                  </Link>
                  <Link
                    href="https://www.youtube.com/playlist?list=PLiJLD9dPrcur6QNuif1oOBb6VuNwTMmuN"
                    passHref
                  >
                    <p onClick={handleToggle} className="text-sm">
                      Music
                    </p>
                  </Link>
                  <Link href="/blog">
                    <p onClick={handleToggle} className="text-sm">
                      Blog
                    </p>
                  </Link>
                  {/* <Link href="/pictures" >
                    <p onClick={handleToggle}>Pictures</p>
                  </Link> */}
                </div>
              </div>
              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">GENERATIONS</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/youths">
                    <p onClick={handleToggle} className="text-sm">
                      Youths
                    </p>
                  </Link>
                  <Link href="/kiddies">
                    <p onClick={handleToggle} className="text-sm">
                      Kiddies
                    </p>
                  </Link>
                  <Link href="">
                    <p onClick={handleToggle} className="text-sm">
                      Men of David
                    </p>
                  </Link>
                  <Link href="/">
                    <p onClick={handleToggle} className="text-sm">
                      Women of honour
                    </p>
                  </Link>
                  <Link href="">
                    <p onClick={handleToggle} className="text-sm">
                      Singles
                    </p>
                  </Link>
                  <Link href="">
                    <p onClick={handleToggle} className="text-sm">
                      Young Couples
                    </p>
                  </Link>
                  <Link href="">
                    <p onClick={handleToggle} className="text-sm">
                      Samuel’s company
                    </p>
                  </Link>
                </div>
              </div>

              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">LOCATIONS</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/locations">
                    <p onClick={handleToggle} className="text-sm">
                      Locations
                    </p>
                  </Link>
                </div>
              </div>
              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">PARTNERSHIP</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/our-partnership">
                    <p onClick={handleToggle} className="text-sm">
                      Partnership
                    </p>
                  </Link>
                </div>
              </div>

              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">CONTACT</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/contact">
                    <p onClick={handleToggle} className="text-sm">
                      Contact
                    </p>
                  </Link>
                </div>
              </div>

              <div className="py-4 space-y-5">
                <h1 className="font-bold text-sm">GIVING</h1>
                <div className="grid grid-cols-2 gap-4 gap-y-6">
                  <Link href="/giving">
                    <p onClick={handleToggle} className="text-sm">
                      Giving
                    </p>
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
