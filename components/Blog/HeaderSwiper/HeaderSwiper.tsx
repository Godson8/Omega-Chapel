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
    "18.png",
    "14.png",
    // "16.JPG",
    // "17.JPG",
    // "18.JPG",
    // "19.JPG",
    // "20.JPG",
    // "21.JPG",
    // "22.JPG",
    // "23.JPG",
    // "24.JPG",
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
                  src={`/founders/${image}`}
                  layout="fill"
                  objectFit="cover"
                  alt={image}
                  className="object-top"
                  // className=" rounded-lg"
                  // objectPosition=""
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
