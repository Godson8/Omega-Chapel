import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { IoCallSharp, IoMail } from "react-icons/io5";
import Head from "next/head";
const kiddies = () => {
  const images = [
    "f.png",
    "a.JPG",
    "b.JPG",
    "c.JPG",
    "kids.jpg",
    "d.JPG",
    "e.JPG",
    "g.JPG",
    "h.JPG",
    "i.JPG",
    "j.JPG",
    "k.JPG",
  ];
  return (
    <div className="container space-y-10 md:space-y-[100px]">
      <Head>
        <title>Omega Chapel - Kiddies -</title>
        <meta name="description" content="Omega Chapel - Kiddies -" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <PageHeader
        title="Kiddies"
        subTitle1="Generations"
        subTitle2="Kiddies"
        // image="/kidsHeader.png"
      />
      <div className="space-y-4 md:space-y-8 flex flex-col items-center">
        <h1 className="text-[24px] md:text-[40px] font-black text-center">
          Omega Kids
        </h1>
        <p className="text-center max-w-[445px]">
          Our children are Mighty seeds: God’s heritage.
        </p>
      </div>
      <Swiper
        // slidesPerView={3}
        spaceBetween={20}
        // slidesPerGroup={2}
        // loop={true}
        slidesPerView={1}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className="flex items-center h-[152px] md:h-72 ">
              <div className="relative h-full w-full object-cover rounded-lg overflow-hidden">
                <Image
                  src={`/kids/${image}`}
                  layout="fill"
                  objectFit="cover"
                  alt={image}
                  // className=" rounded-lg"
                  objectPosition="top"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="space-y-2 mt-16 md:mt-[100px] flex flex-col items-center">
        <h1 className="text-[32px] font-bold text-center">Contact Us</h1>
        <div className="flex flex-col items-center md:flex-row md:space-x-32 space-y-4 md:space-y-0">
          <Link href="/">
            <div className="flex space-x-2 items-center cursor-pointer">
              <IoCallSharp size={25} color="#3C64B1" />
              <p className="text-2xl font-extralight">+2347015556339</p>
            </div>
          </Link>
          <Link href="/">
            <div className="flex space-x-2 items-center cursor-pointer">
              <IoMail size={25} color="#3C64B1" />
              <p className="text-2xl font-extralight">hello@omegachapel.com</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default kiddies;
