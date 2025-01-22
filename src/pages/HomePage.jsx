import React from "react";
import { useNavigate } from "react-router-dom";
import { useDragons } from "../context/DragonContext";

const HomePage = () => {
  const { dragons, deleteDragon, loading, error } = useDragons();
  const navigate = useNavigate();

  if (loading) return <p>Loading dragons...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Dragon List</h1>
      <button onClick={() => navigate("/new")}>Create New Dragon</button>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.id}>
            <h2>{dragon.name} - {dragon.type}</h2>
            <p>Created at: {new Date(dragon.createdAt).toLocaleDateString()}</p>
            <button onClick={() => navigate(`/details/${dragon.id}`)}>View</button>
            <button onClick={() => navigate(`/edit/${dragon.id}`)}>Edit</button>
            <button onClick={() => deleteDragon(dragon.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
