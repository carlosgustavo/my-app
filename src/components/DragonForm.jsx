import React, { useState } from "react";
import { FaDragon } from "react-icons/fa";
import "./DragonForm.scss";

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

  const handleAddHistory = () => {
    setFormData((prev) => ({
      ...prev,
      histories: [...prev.histories, ""], // Adiciona uma nova história vazia
    }));
  };

  const handleHistoryChange = (index, value) => {
    const updatedHistories = formData.histories.map((history, i) =>
      i === index ? value : history
    );
    setFormData((prev) => ({ ...prev, histories: updatedHistories }));
  };

  const handleRemoveHistory = (index) => {
    const updatedHistories = formData.histories.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, histories: updatedHistories }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="dragon-form" onSubmit={handleSubmit}>
      <div>
        <label>
          Nome <FaDragon />
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Tipo</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Histórias</label>
        {formData.histories.map((history, index) => (
          <div key={index} className="history-actions">
            <input
              type="text"
              value={history}
              onChange={(e) => handleHistoryChange(index, e.target.value)}
              placeholder={`História ${index + 1}`}
              required
            />
            <button type="button" onClick={() => handleRemoveHistory(index)}>
              Remover
            </button>
          </div>
        ))}
        <button
          type="button"
          className="add-history-button"
          onClick={handleAddHistory}
        >
          Adicionar história
        </button>
      </div>
      <button type="submit" className="save-button">
        Salvar
      </button>
    </form>
  );
};

export default DragonForm;
