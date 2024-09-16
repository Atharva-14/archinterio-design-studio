import { useRouter } from "next/router";
import { Card } from "./Card";
import { useState } from "react";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null); // Manage hovered card state
  const router = useRouter();

  const handleCardClick = (card) => {
    router.push(`/projectDetails/${card.id}`); // Navigate to the project detail page
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title} // Use card title as key (ensure titles are unique)
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered} // Pass state handlers to Card component
          onClick={handleCardClick} // Pass click handler to Card component
        />
      ))}
    </div>
  );
}
