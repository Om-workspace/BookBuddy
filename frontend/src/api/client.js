import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

const client = axios.create({
  baseURL: API_URL,
});

export const getBooks = async () => {
  const response = await client.get('/books');
  return response.data;
};

export const addBook = async (bookData) => {
  const response = await client.post('/books', bookData);
  return response.data;
};

export const getRecommendations = async (genre, mood) => {
  const params = {};
  if (genre) params.genre = genre;
  if (mood) params.mood = mood;
  
  const response = await client.get('/recommend', { params });
  return response.data;
};

export default client;
