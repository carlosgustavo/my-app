import React from "react";
import { useNavigate } from "react-router-dom";
import { useDragons } from "../context/DragonContext";
import DragonForm from "../components/DragonForm";

const CreatePage = () => {
  const { addDragon } = useDragons();
  const navigate = useNavigate();

  const handleCreate = async (dragon) => {
    await addDragon(dragon);
    navigate("/home");
  };

  return (
    <div>
      <div style={{ padding: "30px" }}>
        <h1>Criar Dragão</h1>
      </div>
      <DragonForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePage;
