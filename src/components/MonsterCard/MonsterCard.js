import React from "react";
import Monster from "../Monster/Monster";
import "./MonsterCard.scss";

const MonsterCard = ({ filteredMonsters }) => {
  return (
    <div className="monster-container">
      {filteredMonsters.map((monster) => (
        <Monster key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default MonsterCard;
