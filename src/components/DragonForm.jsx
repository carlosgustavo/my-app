import React, { useState } from "react";
import './DragonForm.scss'; // Importando o arquivo SCSS

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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          id="type"
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
