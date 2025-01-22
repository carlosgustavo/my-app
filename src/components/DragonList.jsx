import React from "react";
import { useDragons } from "../context/DragonContext";

export const DragonList = ({ onEdit }) => {
  const { dragons, deleteDragon, loading } = useDragons();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dragon List</h2>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            {dragon.name} - {dragon.type}
            <button onClick={() => onEdit(dragon)}>Edit</button>
            <button onClick={() => deleteDragon(dragon.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
