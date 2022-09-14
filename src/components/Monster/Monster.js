import React from "react";
import "./Monster.scss";

const Monster = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="monster">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <p id="monster_name">{name}</p>
      <p className="monster__email">{email}</p>
    </div>
  );
};

export default Monster;
