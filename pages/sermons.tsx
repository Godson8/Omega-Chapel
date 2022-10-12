import Image from "next/image";
import Button from "../components/Button/Button";
import PageHeader from "../components/PageHeader/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import { Grid, Navigation } from "swiper";

import "swiper/css/bundle";
import Link from "next/link";

const endPoint = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=18&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.YOUTUBE_KEY}`;

const sermons = ({ data }: any) => {
  console.log(data);
  const latestSermonImage = data.items[0].snippet.thumbnails.maxres.url;
  const latestSermonVideoId = data.items[0].snippet.resourceId.videoId;
  const latestSermonTitle = data.items[0].snippet.title;
  return (
    <div className="container">
      <PageHeader
        title="Sermons"
        subTitle1="Media"
        subTitle2="Sermons"
        image="sermons.jpg"
      />
      {/* Latest Sermon */}
      <div className="mt-16 md:mt-[100px] rounded-xl ">
        <div className="relative h-[550px] rounded-xl shadow-nav">
          <Image
            src={latestSermonImage}
            layout="fill"
            className="object-cover rounded-xl"
          />
          <div className="absolute bottom-16 md:left-8 p-4 space-y-3">
            <div className="rounded-[12px] bg-[#D9D9D9] w-fit">
              <p className="text-xs px-[6px] py-2 text-white font-bold">
                Latest Sermon
              </p>
            </div>
            <h1 className="text-2xl md:text-[32px] font-black text-white">
              {latestSermonTitle.split("-").shift().trim()}
            </h1>
            <div className="flex xs:space-y-3 xs:flex-col xsOpp:space-x-4">
              <Link
                href={`https://www.youtube.com/watch?v=${latestSermonVideoId}`}
                passHref
              >
                <Button filled title="Watch Sermon" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Sermons */}
      <div className="mt-8 md:mt-[100px] space-y-4">
        <h1 className="text-[32px] font-bold text-left">Recent Sermons</h1>

        <div style={{ height: "244px" }} className="">
          <Swiper
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
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={20}
            navigation={true}
            modules={[Grid, Navigation]}
            className="mySwiper"
          >
            {data.items.map((sermons: any) => (
              <SwiperSlide key={sermons.id} className="swiper-slide-sermons">
                <Link
                  href={`https://www.youtube.com/watch?v=${sermons.snippet.resourceId.videoId}`}
                  passHref
                >
                  <div className="flex items-center h-24 space-x-2 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer">
                    <div className="relative w-1/2 h-full object-cover rounded-lg overflow-hidden shadow-form">
                      <Image
                        src={
                          sermons.snippet.thumbnails.maxres
                            ? sermons.snippet.thumbnails.maxres.url
                            : sermons.snippet.thumbnails.default.url
                        }
                        layout="fill"
                        className="rounded-lg"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <div className="w-1/2">
                      <h1 className="font-bold text-xs md:text-sm text-left ">
                        {sermons.snippet.title.split("-").shift().trim()}
                      </h1>
                      <p className="text-xs md:text-sm text-left ">
                        {sermons.snippet.title.split("-").pop().trim()}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Link
          href="https://www.youtube.com/channel/UC34SSuwfCJdqu3tzBLJ-2YA/videos"
          passHref
        >
          <Button title="View more Sermons" filled />
        </Link>
      </div>
    </div>
  );
};

export default sermons;

export const getServerSideProps = async () => {
  const res = await fetch(endPoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
