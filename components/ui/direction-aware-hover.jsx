import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/libs/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = (event) => {
    if (!ref.current) return;
    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Add event listener for "Esc" key to close the modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    // Cleanup the event listener when the component unmounts or modal closes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        onMouseEnter={handleMouseEnter}
        ref={ref}
        className={cn(
          "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
          className
        )}
        onClick={handleImageClick} // Trigger the click event to open modal
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="relative h-full w-full"
            initial="initial"
            whileHover={direction}
            exit="exit"
          >
            <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
            <motion.div
              variants={variants}
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
            <motion.div
              variants={textVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className={cn(
                "text-white absolute bottom-4 left-4 z-40",
                childrenClassName
              )}
            >
              {children}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // Close modal when clicking outside the image
          >
            <motion.div
              className="relative bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <Image
                src={imageUrl}
                alt="Enlarged image"
                width="1000"
                height="1000"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
};
