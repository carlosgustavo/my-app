import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDragons } from "../context/DragonContext";
import DragonForm from "../components/DragonForm";

const EditPage = () => {
  const { id } = useParams();
  const { dragons, updateDragon } = useDragons();
  const navigate = useNavigate();
  const [dragon, setDragon] = useState(null);

  useEffect(() => {
    const foundDragon = dragons.find((d) => d.id === id);
    if (foundDragon) {
      setDragon(foundDragon);
    }
  }, [id, dragons]);

  const handleUpdate = async (updatedDragon) => {
    await updateDragon(id, updatedDragon);
    navigate("/");
  };

  if (!dragon) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Dragon</h1>
      <DragonForm initialData={dragon} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditPage;
