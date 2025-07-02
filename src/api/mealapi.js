import axios from "axios";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export const searchMeals = async (query) => {
  const res = await axios.get(`${API_BASE}/search.php?s=${query}`);
  return res.data.meals || [];
};

export const getRandomMeal = async () => {
  const res = await axios.get(`${API_BASE}/random.php`);
  return res.data.meals[0];
};

export const getMealById = async (id) => {
  const res = await axios.get(`${API_BASE}/lookup.php?i=${id}`);
  return res.data.meals[0];
};

export const getCategories = async () => {
  const res = await axios.get(`${API_BASE}/categories.php`);
  return res.data.categories || [];
};

export const getMealsByCategory = async (category) => {
  const res = await axios.get(`${API_BASE}/filter.php?c=${category}`);
  return res.data.meals || [];
};
