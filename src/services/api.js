import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRecommendation = async (occasion, intimacyLevel, mainDish) => {
  try {
    const response = await api.post('/recommendation', {
      occasion,
      intimacyLevel,
      mainDish,
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter recomendação:', error);
    throw error;
  }
};

export default api;
