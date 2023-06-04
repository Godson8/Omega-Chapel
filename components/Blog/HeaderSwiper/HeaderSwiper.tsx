// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import Banner from "../Banner/Banner";

// import required modules

const HeaderSwiper = () => {
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
    <>
      <div className="h-60 md:h-[650px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="blogSwiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              {/* <div className="flex items-center h-[152px] md:h-72 "> */}
              <div className="relative h-full w-full object-cover overflow-hidden">
                <Image
                  src={`/kids/${image}`}
                  layout="fill"
                  objectFit="cover"
                  alt={image}
                  // className=" rounded-lg"
                  objectPosition="top"
                />
              </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Banner absolute />
    </>
  );
};

export default HeaderSwiper;
