import { FocusCards } from "@/components/ui/FocusCards";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
    const data = res.data.projects;

    const formattedData = data.map((project) => ({
      id: project._id,
      title: project.title,
      src: project.coverImageUrl,
    }));

    setProjects(formattedData);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <Head>
        <title>Projects - ArchIntrio Design Studio</title>
        <meta></meta>
      </Head>
      <div className="p-4">
        <h1 className="text-neutral-700 dark:text-neutral-200 text-4xl font-bold text-center mb-8">
          PROJECTS
        </h1>
        <FocusCards cards={projects} />
      </div>
    </div>
  );
};

export default Projects;
