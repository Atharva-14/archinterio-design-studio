import { cn } from "@/libs/utils";
import Image from "next/image";
import React, { useState } from "react";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)} // Set hovered index on mouse enter
    onMouseLeave={() => setHovered(null)} // Reset hovered index on mouse leave
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
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
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0" // Control overlay visibility based on hover
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title} {/* Display card title */}
      </div>
    </div>
  </div>
));

Card.displayName = "Card"; // Set display name for better debugging

// FocusCards component to display grid of cards
export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null); // Manage hovered card state

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title} // Use card title as key (ensure titles are unique)
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} // Pass state handlers to Card component
        />
      ))}
    </div>
  );
}
