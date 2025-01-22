import axios from "axios";

const API_URL = "https://678bd3801a6b89b27a2b93bc.mockapi.io/itsec/"; // Replace with your actual API URL

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(`${API_URL}/tasks`, taskData);
  return response.data;
};

export const updateTask = async (taskId, taskData) => {
  const response = await axios.put(`${API_URL}/tasks/${taskId}`, taskData);
  return response.data;
};

export const deleteTask = async (taskId) => {
  await axios.delete(`${API_URL}/tasks/${taskId}`);
};
