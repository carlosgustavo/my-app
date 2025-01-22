import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DragonContext = createContext();
const API_URL = "https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

export const DragonProvider = ({ children }) => {
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch initial dragons
  useEffect(() => {
    const fetchDragons = async () => {
      try {
        const response = await axios.get(API_URL);
        setDragons(response.data);
      } catch (err) {
        console.error("Failed to fetch dragons:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDragons();
  }, []);

  const addDragon = async (dragon) => {
    try {
      const response = await axios.post(API_URL, dragon);
      setDragons((prev) => [...prev, response.data]);
    } catch (err) {
      console.error("Failed to add dragon:", err);
      setError(err.message);
    }
  };

  const updateDragon = async (id, updatedDragon) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedDragon);
      setDragons((prev) =>
        prev.map((dragon) => (dragon.id === id ? response.data : dragon))
      );
    } catch (err) {
      console.error("Failed to update dragon:", err);
      setError(err.message);
    }
  };

  const deleteDragon = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setDragons((prev) => prev.filter((dragon) => dragon.id !== id));
    } catch (err) {
      console.error("Failed to delete dragon:", err);
      setError(err.message);
    }
  };

  return (
    <DragonContext.Provider
      value={{ dragons, addDragon, updateDragon, deleteDragon, loading, error }}
    >
      {children}
    </DragonContext.Provider>
  );
};

export const useDragons = () => useContext(DragonContext);
