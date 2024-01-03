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
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const endPoint = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.YOUTUBE_KEY}`;

const Home = ({ data }: any) => {
  console.log(data);
  const latestSermonImage = data.items[0].snippet.thumbnails.maxres
    ? data.items[0].snippet.thumbnails.maxres.url
    : data.items[0].snippet.thumbnails.high.url;
  const latestSermonVideoId = data.items[0].snippet.resourceId.videoId;

  const latestSermonTitle = data.items[0].snippet.title;

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Open the modal on component mount
    setOpenModal(true);

    // Cleanup function to close the modal on component unmount
    return () => setOpenModal(false);
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleModalClose = () => {
    setOpenModal(false);
  };

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

      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { xs: 300, sm: 400, md: 600, lg: 800, xl: 1000 }, // Adjust the widths as needed
            mx: "auto", // Center the modal horizontally
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            onClick={handleModalClose}
            style={{ alignSelf: "flex-end", marginBottom: "10px" }}
          >
            <IoIosCloseCircle size={25} color="red" />
          </button>
          <h1 className="text-2xl md:text-[32px] font-black text-primary">
            OUT NOW!
          </h1>
          <Typography sx={{ mt: 2 }}>
            <div className="relative xsOpp:h-[550px] lgOpp:h-[250px] rounded-xl mb-2">
              <Image
                src="/components.jpg"
                layout="fill"
                alt="7 Components of Faith"
                className="object-cover"
              />
            </div>
            To purchase the book, send a WhatsApp text to:
          </Typography>
          <h1 className="font-black text-xl text-primary font-primary hover:text-secondary">
            <a
              href="https://wa.me/2348026842508?text=I%20would%20like%20to%20purchase%20the%20book."
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>+234 802 684 2508</strong>
            </a>
          </h1>
        </Box>
      </Modal>
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// export function BasicModal() {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   useEffect(() => {
//     // Open the modal on component mount
//     handleOpen();

//     // Cleanup function to close the modal on component unmount
//     return () => handleClose();
//   }, []); // Empty dependency array ensures this effect runs once on mount

//   return (
//     <div>
//       {/* Remove the button as the modal will be opened on page load */}
//       {/* <Button onClick={handleOpen}>Open modal</Button> */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
