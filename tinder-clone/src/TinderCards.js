import React, { useState } from "react";
import "./styles/TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41Gr%2BplCXTL.jpg&f=1&nofb=1",
    },
  ]);

  return (
    <div className="tinderCards">
      {people.map((person) => (
        <h1>{person.name}</h1>
      ))}
    </div>
  );
}

export default TinderCards;
