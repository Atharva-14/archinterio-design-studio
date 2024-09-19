import { CardSpotlight } from "@/components/ui/card-spotlight";
import Head from "next/head";

const Services = () => {
  return (
    <div className="p-4">
      <Head>
        <title>Services - ArchIntrio Design Studio</title>
        <meta></meta>
      </Head>
      <div className="px-4">
        <h1 className="text-neutral-700 dark:text-neutral-200 text-4xl font-bold text-center mb-8">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
          <CardSpotlight className="h-full w-full">
            <span>
              <h2 className="text-2xl font-bold relative z-20 mt-2 text-white">
                Architecture
              </h2>
              <p className="text-neutral-300 mt-4 relative z-20">
                Our architectural designs are a blend of innovation,
                functionality, and sustainability. We approach each project with
                a commitment to creating spaces that not only meet the client's
                vision but also harmonize with the surroundings.
              </p>
            </span>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <span>
              <h2 className="text-2xl font-bold relative z-20 mt-2 text-white">
                Interior Design
              </h2>
              <p className="text-neutral-300 mt-4 relative z-20">
                Our interior design solutions transform spaces into
                personalized, stylish, and functional environments. Whether it’s
                a residential or commercial project, we tailor each design to
                reflect the client’s personality and needs.
              </p>
            </span>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <span>
              <h2 className="text-2xl font-bold relative z-20 mt-2 text-white">
                Structural Drawings
              </h2>
              <p className="text-neutral-300 mt-4 relative z-20">
                Our structural drawings provide the essential technical
                foundation for every project. These detailed plans ensure that
                all architectural designs are safe, stable, and compliant with
                engineering standards.
              </p>
            </span>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <span>
              <h2 className="text-2xl font-bold relative z-20 mt-2 text-white">
                Liaisoning
              </h2>
              <p className="text-neutral-300 mt-4 relative z-20">
                We handle all aspects of liaisoning to secure necessary
                approvals and permits for your project. Our team works closely
                with local authorities, ensuring compliance with building codes.
              </p>
            </span>
          </CardSpotlight>

          <CardSpotlight className="h-full w-full">
            <span>
              <h2 className="text-2xl font-bold relative z-20 mt-2 text-white">
                Fly Ash Bricks
              </h2>
              <p className="text-neutral-300 mt-4 relative z-20">
                As part of our commitment to sustainability, we offer
                high-quality fly ash bricks that are durable and
                energy-efficient. They are an ideal choice for projects seeking
                both environmental responsibility and long-lasting performance.
              </p>
            </span>
          </CardSpotlight>
        </div>
      </div>
    </div>
  );
};

export default Services;
