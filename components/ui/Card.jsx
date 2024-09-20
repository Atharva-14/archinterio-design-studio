import { cn } from "@/libs/utils";
import Image from "next/image";
import React from "react";

export const Card = React.memo(
  ({ card, index, hovered, setHovered, onClick }) => {
    const handleClick = () => {
      if (onClick) {
        onClick(card); // Call the onClick handler with the card data
      }
    };

    return (
      <div
        onMouseEnter={() => setHovered(index)} // Set hovered index on mouse enter
        onMouseLeave={() => setHovered(null)} // Reset hovered index on mouse leave
        onClick={handleClick} // Handle click event
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer", // Add cursor-pointer to indicate clickable
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]" // Blur other cards when one is hovered
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0" // Ensure image covers the card container
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/20 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0", // Hover effect for larger screens
            "md:opacity-0", // Keep it hidden by default on larger screens
            "opacity-100 md:hover:opacity-100" // Always visible on small screens, hidden on larger screens by default
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title} {/* Display card title */}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card"; // Set display name for better debugging
