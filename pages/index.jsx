import React from "react";
import { ImagesSlider } from "@/components/ui/ImageSlider";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/FlipWords";
import Head from "next/head";
import { IconBrandTwitter } from "@tabler/icons-react";

const Home = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_1.webp?alt=media&token=d3343890-1146-42b9-9b0f-f929479267e8",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_2.webp?alt=media&token=0c706221-1212-4a81-a65b-a14562986c46",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_3.webp?alt=media&token=d7fc9ee5-03de-4558-b06e-b068be715f10",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_4.webp?alt=media&token=173e538e-8bee-4361-9202-1a4b042f506c",
    "https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/Home%2Fhome_image_slider_5.webp?alt=media&token=dfc12bbb-ccb8-4e43-b2db-5553a579b266",
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
        <meta
          name="description"
          content="Welcome to ArchInterio Design Studio, where we create iconic and innovative spaces tailored to your vision."
        />
        <meta
          name="keywords"
          content="Architecture, Interior Design, Custom Spaces, Innovative Design, ArchInterio"
        />
        <meta name="author" content="ArchInterio Design Studio" />
        <meta property="og:title" content="Home - ArchInterio Design Studio" />
        <meta
          property="og:description"
          content="Explore our iconic and innovative designs at ArchInterio Design Studio."
        />
        <meta property="og:image" content="/logo.ico" />

        <meta property="og:url" content="https://www.archinterio.co.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - ArchInterio Design Studio" />
        <meta
          name="twitter:description"
          content="Welcome to ArchInterio Design Studio, where we create iconic and innovative spaces tailored to your vision."
        />
        <meta name="twitter:image" content={IconBrandTwitter} />
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
