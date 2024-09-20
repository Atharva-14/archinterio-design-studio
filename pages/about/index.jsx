import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandTwitter } from "@tabler/icons-react";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row p-4 md:space-x-8 mx-auto max-w-screen-lg">
      <Head>
        <title>About - ArchIntrio Design Studio</title>
        <meta
          name="description"
          content="Learn about ArchIntrio Design Studio, a vibrant architectural and interior design firm based in Pune."
        />
        <meta
          name="keywords"
          content="About, ArchInterio, Design Studio, Architecture, Interior Design, Pune"
        />
        <meta name="author" content="ArchInterio Design Studio" />
        <meta property="og:title" content="About - ArchIntrio Design Studio" />
        <meta
          property="og:description"
          content="Discover the mission, vision, and services offered by ArchInterio Design Studio."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/About%2Fabout_interior_img.jpg?alt=media&token=1cc7864b-4f73-43b0-81a3-429458722a07"
        />
        <meta property="og:url" content="https://www.archinterio.co.in/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About - ArchIntrio Design Studio" />
        <meta
          name="twitter:description"
          content="Learn about our innovative approach to architecture and design."
        />
        <meta name="twitter:image" content={IconBrandTwitter} />
      </Head>

      <div className="flex flex-col md:mt-0 mt-4 space-y-6">
        <span>
          <h1 className="mb-2 text-2xl text-neutral-700 dark:text-neutral-200">
            WHO WE ARE?
          </h1>
          <p className="text-neutral-700 dark:text-neutral-200">
            Founded a year ago by a passionate young architect,{" "}
            <motion.span style={{ color: "orange" }}>A</motion.span>rch
            <motion.span style={{ color: "orange" }}>I</motion.span>nterio
            Design Studio is a vibrant architectural and interior design firm
            based in Pune, with a growing presence across Maharashtra. With
            fresh ideas and a modern approach, we offer a unique blend of
            creativity and practicality in every project. Our vision is to
            create inspiring spaces that reflect our clients' evolving
            lifestyles while remaining rooted in design excellence. We combine
            creativity with functionality to bring our clients' dreams to life.
          </p>
        </span>
        <span>
          <h1 className="mb-2 text-2xl text-neutral-700 dark:text-neutral-200">
            WHAT WE DO?
          </h1>
          <p className="text-neutral-700 dark:text-neutral-200">
            Whether crafting custom homes, designing multi-family residences, or
            creating productive commercial environments, our goal is to deliver
            designs that are both visually appealing and highly practical. We
            also offer bespoke interior design services, enhancing the beauty
            and utility of spaces through thoughtful, customized solutions.
            Additionally, we handle renovations and extensions, breathing new
            life into spaces by reimagining them with a modern, innovative
            approach while preserving their original charm.
          </p>
        </span>
        <span>
          <h1 className="mb-2 text-2xl text-neutral-700 dark:text-neutral-200">
            WHY CHOOSE US?
          </h1>
          <p className="text-neutral-700 dark:text-neutral-200">
            Led by a new-generation architect,{" "}
            <motion.span style={{ color: "orange" }}>A</motion.span>rch
            <motion.span style={{ color: "orange" }}>I</motion.span>nterio
            Design Studio offers fresh perspectives and cutting-edge design
            solutions. Our client-centered approach ensures that every project
            is a true collaboration, keeping our clients' needs and preferences
            at the forefront. We are well-versed in local architectural styles,
            materials, and regulations, and we pay close attention to every
            detail—from concept to execution—ensuring our designs are both
            aesthetically striking and functionally efficient. In a
            fast-changing world, our energy and vision pave the way for spaces
            that are not only built for today but inspired by tomorrow.
          </p>
        </span>
      </div>
      <div className="flex-shrink-0 md:w-1/2 my-auto">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/archinterio-portfolio.appspot.com/o/About%2Fabout_interior_img.jpg?alt=media&token=1cc7864b-4f73-43b0-81a3-429458722a07"
          alt="Interior Image"
          width={500}
          height={1000}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
