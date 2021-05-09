import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./styles/TinderCards.css";

function TinderCards() {
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41Gr%2BplCXTL.jpg&f=1&nofb=1",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftalkglitz.media%2Fwp-content%2Fuploads%2F2020%2F07%2FJeff_Bezos_laugh_2.jpg&f=1&nofb=1",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log(`Removing: ${nameToDelete}`);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(`${name} left the screen!`);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
