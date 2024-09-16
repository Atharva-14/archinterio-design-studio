import React from "react";
import { ImagesSlider } from "@/components/ui/ImageSlider";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/FlipWords";
import Head from "next/head";

const Home = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_1.png?alt=media&token=7d6b3666-c91d-4d28-9ed5-0c5c03bb2713",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_2.jpg?alt=media&token=de2ad4f6-9ba0-4905-885d-48c47e0dc656",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_3.png?alt=media&token=683f75df-926a-48e0-92fb-b3905182d1ef",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_4.png?alt=media&token=06516476-e3b1-46be-9021-92fa30f3007f",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_5.png?alt=media&token=9b98e0ba-0d31-4cd2-b39f-0bd6c086edda",
  ];

  const words = [
    "iconic",
    "custom",
    "signature",
    "innovative",
    "dream",
    "cutting-edge",
  ];

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
