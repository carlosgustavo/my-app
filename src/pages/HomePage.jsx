import React from "react";
import { useNavigate } from "react-router-dom";
import { useDragons } from "../context/DragonContext";
import DragonCard from "../components/DragonCard"; // Importando o DragonCard
import "./HomePage.scss";

const HomePage = () => {
  const { dragons, deleteDragon, loading, error } = useDragons();
  const navigate = useNavigate();

  if (loading) return <p style={{ margin: 20 }}>Carregando Dragons...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-page">
      <div className="home-page__header">
        <h1>Lista de Dragões</h1>
        <button className="create-dragon-btn" onClick={() => navigate("/new")}>
          Cadastrar dragão
        </button>
      </div>
      <div className="home-page__cards">
        {dragons.map((dragon) => (
          <DragonCard
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            type={dragon.type}
            createdAt={dragon.createdAt}
            histories={dragon.histories}
            onEdit={() => navigate(`/edit/${dragon.id}`)}
            onDelete={() => deleteDragon(dragon.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
