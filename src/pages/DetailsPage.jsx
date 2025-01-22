import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDragons } from "../context/DragonContext";

const DetailsPage = () => {
  const { id } = useParams();
  const { dragons } = useDragons();
  const navigate = useNavigate();

  const dragon = dragons.find((d) => d.id === id);

  if (!dragon) return <p>Dragon not found!</p>;

  return (
    <div>
      <h1>{dragon.name}</h1>
      <p>Type: {dragon.type}</p>
      <p>Created At: {new Date(dragon.createdAt).toLocaleDateString()}</p>
      {dragon.histories.length > 0 && (
        <ul>
          {dragon.histories.map((history, index) => (
            <li key={index}>{history}</li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default DetailsPage;
