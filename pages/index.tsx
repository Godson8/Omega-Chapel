import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button/Button";
import FollowUs from "../components/FollowUs/FollowUs";
import Footer from "../components/Footer/Footer";
import Generations from "../components/Generations/Generations";
import Hero from "../components/Hero/Hero";
import JoinUs from "../components/JoinUs/JoinUs";
import LatestSermon from "../components/LatestSermon/LatestSermon";
import Locations from "../components/Locations/Locations";
import NavBar from "../components/NavBar/NavBar";
import Newsletter from "../components/Newsletter/Newsletter";
import styles from "../styles/Home.module.css";

const endPoint = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.YOUTUBE_KEY}`;

const Home = ({ data }: any) => {
  console.log(data);
  const latestSermonImage = data.items[0].snippet.thumbnails.maxres.url;
  const latestSermonVideoId = data.items[0].snippet.resourceId.videoId;
  const latestSermonTitle = data.items[0].snippet.title;
  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Omega Chapel - Welcome Home -</title>
        <meta name="description" content="Omega Chapel - Welcome Home -" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* <Image src="/noise.png" layout="fill" alt="bg" className="object-cover" /> */}
      <Hero />
      {/* Latest Sermon */}
      <div className="container mt-16 md:mt-[100px] rounded-xl ">
        <div className="relative h-[550px] rounded-xl shadow-nav">
          <Image
            src={latestSermonImage}
            layout="fill"
            className="object-cover rounded-xl"
            alt={latestSermonTitle}
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
              <Link href="/sermons" passHref>
                <Button outline title="View More Sermons" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Latest Sermon */}
      <Locations />
      <JoinUs
        title="Join us this Sunday!"
        detail="Please fill the form below. We would love to say hello."
      />
      <Generations />
      <Newsletter />
      <FollowUs />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch(endPoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
