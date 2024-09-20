import { FocusCards } from "@/components/ui/FocusCards";
import { IconBrandTwitter } from "@tabler/icons-react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjects = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/projects`
      );
      const data = res.data.projects;

      const formattedData = data.map((project) => ({
        id: project._id,
        title: project.title,
        src: project.coverImageUrl,
      }));

      setProjects(formattedData);
    } catch (error) {
      console.log("Failed to fetch projects: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <Head>
        <title>Projects - ArchIntrio Design Studio</title>
        <meta
          name="description"
          content="Explore our diverse projects showcasing architecture and interior design excellence at ArchInterio Design Studio."
        />
        <meta
          name="keywords"
          content="Projects, Architecture, Interior Design, ArchInterio"
        />
        <meta name="author" content="ArchInterio Design Studio" />
        <meta
          property="og:title"
          content="Projects - ArchInterio Design Studio"
        />
        <meta
          property="og:description"
          content="Discover our innovative projects that blend creativity and functionality."
        />
        <meta property="og:image" content="/logo.ico" />
        <meta
          property="og:url"
          content="https://www.archinterio.co.in/projects"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Projects - ArchInterio Design Studio"
        />
        <meta
          name="twitter:description"
          content="Explore our diverse projects showcasing architecture and interior design excellence."
        />
        <meta name="twitter:image" content={IconBrandTwitter} />
      </Head>
      <div className="p-4">
        <h1 className="text-neutral-700 dark:text-neutral-200 text-4xl font-bold text-center mb-8">
          PROJECTS
        </h1>
        {loading ? (
          <div className="flex flex-col md:flex-row gap-2">
            {[...new Array(4)].map((i) => (
              <div
                key={"first-array" + i}
                className="h-[400px] w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <FocusCards cards={projects} />
        )}
      </div>
    </div>
  );
};

export default Projects;
