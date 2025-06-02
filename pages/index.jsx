import React from "react";
import { ImagesSlider } from "@/components/ui/ImageSlider";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/FlipWords";
import Head from "next/head";

const Home = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_1.png?alt=media&token=bacd2913-9714-4b9b-804f-77a49c757cd7",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_2.jpg?alt=media&token=00eeac65-56b8-4bcf-951f-cb4aa595933c",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_3.png?alt=media&token=2ef148ac-a7fa-45f2-a0eb-d03889641f40",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_4.png?alt=media&token=9a4fef76-37fa-483c-ba75-aae5b6fa38e9",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_5.png?alt=media&token=82367e5b-7d53-4575-ae8b-46d034d1722a",
  ];

  const words = ["extraordinary", "innovative", "cutting-edge", "unique"];

  return (
    <div>
      <Head>
        <title>Home - ArchIntrio Design Studio</title>
        <meta></meta>
      </Head>
      <ImagesSlider className="h-[40rem] rounded-tl-2xl" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-semibold text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 py-4">
            Build
            <FlipWords words={words} /> <br />
            spaces with ArchInterio Design Studio.
          </motion.p>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};

export default Home;
