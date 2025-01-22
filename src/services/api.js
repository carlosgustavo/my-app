import axios from "axios";

const API_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

export const api = {
  getAll: () => axios.get(API_URL),
  getById: (id) => axios.get(`${API_URL}/${id}`),
  create: (data) => axios.post(API_URL, data),
  update: (id, data) => axios.put(`${API_URL}/${id}`, data),
  delete: (id) => axios.delete(`${API_URL}/${id}`),
};
