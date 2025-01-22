import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDragons } from "../context/DragonContext";

const DragonForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    histories: [],
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default DragonForm;
