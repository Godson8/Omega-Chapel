import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Button from "../Button/Button";

const generationsList = [
  {
    id: 1,
    title: "Youths",
    subTitle: "Eagle’s nest: the fellowship of our youngsters.",
    image: "/youths/youths.JPG",
    link: "youths",
  },
  {
    id: 2,
    title: "Kiddies",
    subTitle: "Our children are Mighty seeds: God’s heritage.",
    image: "/kids/kids.jpg",
    link: "kiddies",
  },
  {
    id: 3,
    title: "Men of David",
    subTitle: "Building pillars that hold the house.",
    image: "/men/men.JPG",
    link: "",
  },
  {
    id: 4,
    title: "Women of honour",
    subTitle: "Support for the unique needs of a woman.",
    image: "/women/women.JPG",
    link: "",
  },
  {
    id: 5,
    title: "Singles",
    subTitle: "Unmarried young adults in search of spouse and success.",
    image: "/singles.JPG",
    link: "",
  },
  {
    id: 6,
    title: "Young couples",
    subTitle: "Building a strong marriage and home for the Lord.",
    image: "",
    link: "",
  },
  {
    id: 7,
    title: "Samuel’s company",
    subTitle: "Special fellowship of minister’s kids.",
    image: "",
    link: "",
  },
];

const Generations = () => {
  return (
    <div className="container mt-16 md:mt-[100px] ">
      <div className="py-12 space-y-8 md:space-y-20 bg-[#f8fafc] rounded-xl">
        <h1 className="text-[32px] font-bold text-center">Generations</h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-[50px] md:space-y-0 space-y-8 ">
          <Swiper
            // slidesPerView={3}
            spaceBetween={15}
            // slidesPerGroup={2}
            // loop={true}
            slidesPerView={1}
            loopFillGroupWithBlank={true}
            breakpoints={{
              // when window width is >= 640px
              440: {
                slidesPerView: 2,
              },
              // when window width is >= 768px

              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            // className="mySwiper"
          >
            {generationsList.map((generation) => (
              <SwiperSlide key={generation.title}>
                <div className=" h-[357px] w-full max-w-[286px] rounded-xl overflow-hidden bg-white shadow-form">
                  <div className="w-full h-1/2 rounded-t-xl relative overflow-hidden">
                    <Image
                      src={generation.image ? generation.image : "/avatar.jpg"}
                      layout="fill"
                      alt={generation.title}
                      className="object-cover object-center hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
                    />
                  </div>
                  <div className="p-4 flex justify-between items-start flex-col h-1/2 pb-12">
                    <div>
                      <p className="text-primary text-[20px] font-bold">
                        {generation.title}
                      </p>
                      <p className="text-primary text-[14px]">
                        {generation.subTitle}
                      </p>
                    </div>
                    {generation.id < 3 && (
                      <Link
                        href={generation.link}
                        as={generation.title}
                        passHref
                      >
                        <button className="flex items-center space-x-2 text-xs border border-solid border-primary border-opacity-40 text-primary p-2 rounded-md hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer">
                          <p>Learn more</p>{" "}
                          <AiOutlineArrowRight color="#373F41" size={12} />
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className=" h-[357px] w-full max-w-[286px] rounded-xl overflow-hidden bg-white shadow-form">
          <div className="w-full h-1/2 rounded-xl relative overflow-hidden">
            <Image
              src="/youths/youths.JPG"
              layout="fill"
              alt="youths"
              className="rounded-xl object-cover object-center hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
            />
          </div>
          <div className="p-4 space-y-3">
            <p className="text-primary text-[20px] font-bold">Youths</p>
            <p className="text-primary text-[14px]">
              Eagle’s nest: the fellowship of our youngsters
            </p>
            <Link href="/youths" as={"Youths"} passHref>
              <button className="flex items-center space-x-2 text-xs border border-solid border-primary border-opacity-40 text-primary p-2 rounded-md hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer">
                <p>Learn more</p>{" "}
                <AiOutlineArrowRight color="#373F41" size={12} />
              </button>
            </Link>
          </div>
        </div>
        <Link href="/kids" as={"Kids"}>
          <div className=" h-[357px] w-full max-w-[286px] rounded-xl overflow-hidden cursor-pointer bg-white shadow-form">
            <div className="w-full h-1/2 rounded-xl relative">
              <Image
                src="/kids/kids.JPG"
                layout="fill"
                alt="youths"
                className="rounded-xl object-cover object-center "
              />
            </div>
            <div className="p-4">
              <p className="text-primary text-[20px] font-bold">Kiddies</p>
            </div>
          </div>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Generations;
