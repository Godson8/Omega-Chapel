import Image from "next/image";
import Button from "../components/Button/Button";
import PageHeader from "../components/PageHeader/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// import "./styles.css";

import { Grid, Navigation } from "swiper";

import "swiper/css/bundle";

const endPoint = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=18&playlistId=${process.env.CHOIR_ID}&key=${process.env.YOUTUBE_KEY}`;

const music = ({ data }: any) => {
  console.log(data);
  const latestMusicImage =
    data.items[data.items.length - 1].snippet.thumbnails.default.url;
  const latestMusicTitle = data.items[data.items.length - 1].snippet.title;
  return (
    <div className="container">
      <PageHeader
        title="Music"
        subTitle1="Media"
        subTitle2="Music"
        image="music.jpg"
      />

      {/* Latest Sermon */}
      <div className="mt-16 md:mt-[100px] rounded-xl ">
        <div className="relative h-[550px] rounded-xl shadow-nav">
          <Image
            src={latestMusicImage}
            layout="fill"
            className="object-cover rounded-xl"
          />
          <div className="absolute bottom-16 md:left-8 p-4 space-y-3">
            <div className="rounded-[12px] bg-[#D9D9D9] w-fit">
              <p className="text-xs px-[6px] py-2 text-white font-bold">
                Latest Muisc
              </p>
            </div>
            <h1 className="text-2xl md:text-[32px] font-black text-white">
              {latestMusicTitle.trim()}
            </h1>
            <div className="flex xs:space-y-3 xs:flex-col xsOpp:space-x-4">
              <Button filled title="Watch Video" />
            </div>
          </div>
        </div>
      </div>

      {/* Other Sermons */}
      <div className="mt-8 md:mt-[100px] space-y-4">
        <h1 className="text-[32px] font-bold text-left">Recent Music</h1>

        <div style={{ height: "244px" }} className="">
          <Swiper
            // slidesPerView={3}
            breakpoints={{
              // when window width is >= 640px
              //  slidesPerView: 1,
              640: {
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
            }}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={20}
            navigation={true}
            modules={[Grid, Navigation]}
            className="mySwiper"
          >
            {data.items.map((music: any) => (
              <SwiperSlide key={music.id}>
                <div className="flex items-center h-24 space-x-2 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer">
                  <div className="relative w-1/2 h-full object-cover rounded-lg overflow-hidden shadow-form">
                    <Image
                      src={
                        music.snippet.thumbnails.maxres
                          ? music.snippet.thumbnails.maxres.url
                          : music.snippet.thumbnails.default.url
                      }
                      layout="fill"
                      className="rounded-lg"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="w-1/2">
                    <h1 className="font-bold text-xs md:text-sm text-left ">
                      {music.snippet.title.split("-").shift().trim()}
                    </h1>
                    <p className="text-xs md:text-sm text-left ">
                      {music.snippet.title.split("-").pop().trim()}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Button title="View more Music" filled />
      </div>
    </div>
  );
};

export default music;

export const getServerSideProps = async () => {
  const res = await fetch(endPoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
