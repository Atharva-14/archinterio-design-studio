import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/libs/utils";

export const DirectionAwareHover = ({
  imageUrl,
  imageUrls,
  currentIndex,
  setCurrentIndex,
  imageClassName,
  className,
}) => {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
      if (e.key === "ArrowRight") {
        goToNextImage();
      }
      if (e.key === "ArrowLeft") {
        goToPreviousImage();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        onMouseEnter={() => {}}
        ref={ref}
        className={cn(
          "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
          className
        )}
        onClick={handleImageClick}
      >
        <AnimatePresence mode="wait">
          <motion.div className="relative h-full w-full">
            <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/10 z-10 transition duration-500" />
            <motion.div
              className="h-full w-full relative bg-gray-50 dark:bg-black"
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <Image
                alt="image"
                className={cn(
                  "h-full w-full object-cover scale-[1.15]",
                  imageClassName
                )}
                width="1000"
                height="1000"
                src={imageUrl}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {isModalOpen && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imageUrls[currentIndex]} // Use the current image
                alt="Enlarged image"
                width="1000"
                height="1000"
                className="object-contain"
              />
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 text-white p-2"
                onClick={goToPreviousImage}
              >
                ←
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 text-white p-2"
                onClick={goToNextImage}
              >
                →
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};
