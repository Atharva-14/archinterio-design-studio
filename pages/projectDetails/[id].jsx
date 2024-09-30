import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const fetchProject = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`
      );
      const data = res.data.project;

      setProject(data);
      setCurrentIndex(0);
    } catch (error) {
      console.error("Failed to fetch project:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>{project.title} - ArchInterio Design Studio</title>
        <meta
          name="description"
          content={`Details of project ${project.description}`}
        />
      </Head>
      <div className="p-4">
        <h1 className="text-neutral-700 dark:text-neutral-200 text-3xl font-bold">
          {project.title}
        </h1>
        <div className="flex flex-col lg:flex-row mt-6 w-full gap-6">
          <div className="lg:w-1/4 w-full flex flex-col space-y-1">
            <span>
              <p className="text-xl font-medium text-neutral-700 dark:text-neutral-200">
                Client:
              </p>
              <p className="text-base ml-1 text-neutral-700 dark:text-neutral-200">
                {project.name}
              </p>
            </span>

            <span>
              <p className="text-xl font-medium text-neutral-700 dark:text-neutral-200">
                Type:
              </p>
              <p className="text-base ml-1 text-neutral-700 dark:text-neutral-200">
                {project.type}
              </p>
            </span>

            <span>
              <p className="text-xl font-medium text-neutral-700 dark:text-neutral-200">
                Project:
              </p>
              <p className="text-base ml-1 text-neutral-700 dark:text-neutral-200">
                {project.project}
              </p>
            </span>

            <span>
              <p className="text-xl font-medium text-neutral-700 dark:text-neutral-200">
                Year:
              </p>
              <p className="text-base ml-1 text-neutral-700 dark:text-neutral-200">
                {project.year}
              </p>
            </span>

            {/* <span>
              <p className="text-xl font-medium text-neutral-700 dark:text-neutral-200">
                Description:
              </p>
              <p className="text-base ml-1 text-neutral-700 dark:text-neutral-200">
                {project.description}
              </p>
            </span> */}
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:w-3/4 w-full">
            {project.imageUrls.map((url, index) => (
              <DirectionAwareHover
                key={index}
                imageUrl={url}
                imageUrls={project.imageUrls}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
