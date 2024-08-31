// servicesAPI.js
import axios from 'axios';

const API_URL = '/api/servicios';

// Obtener todos los servicios
export const getServices = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Crear un nuevo servicio
export const createService = async (service) => {
  const response = await axios.post(API_URL, service);
  return response.data;
};

// Actualizar un servicio existente
export const updateService = async (id, service) => {
  const response = await axios.put(`${API_URL}/${id}`, service);
  return response.data;
};

// Eliminar un servicio
export const deleteService = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
