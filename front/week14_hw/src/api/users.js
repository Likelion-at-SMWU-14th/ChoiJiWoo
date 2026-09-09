import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

// Create
export const signUp = async ({ username, password }) => {
  const { data } = await axios.post(`${BASE_URL}/users`, { username, password });
  return data
}

// Read
export const fetchMyPage = async (userId) => {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
  return data
}

// Update
export const updateProfile = async ({ userId, ...updatedFields }) => {
  const { data } = await axios.put(`${BASE_URL}/users/${userId}`, updatedFields);
  return data
}

// Delete
export const deleteUser = async (userId) => {
  await axios.delete(`${BASE_URL}/users/${userId}`);
  return userId
}