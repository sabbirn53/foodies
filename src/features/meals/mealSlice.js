import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as mealApi from "../../api/mealapi";

export const fetchMeals = createAsyncThunk(
  "meals/fetchMeals",
  async (query, { rejectWithValue }) => {
    try {
      const data = await mealApi.searchMeals(query);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchRandomMeal = createAsyncThunk(
  "meals/fetchRandomMeal",
  async (_, { rejectWithValue }) => {
    try {
      const data = await mealApi.getRandomMeal();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchMealsByCategory = createAsyncThunk(
  "meals/fetchMealsByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const data = await mealApi.getMealsByCategory(category);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  items: [],
  randomMeal: null,
  status: "idle",
  error: null,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const meal = action.payload;
      const exists = state.favorites.find((fav) => fav.idMeal === meal.idMeal);
      if (exists) {
        state.favorites = state.favorites.filter((fav) => fav.idMeal !== meal.idMeal);
      } else {
        state.favorites.push(meal);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    loadFavorites: (state) => {
      state.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    },
    clearMeals: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong.";
      })
      .addCase(fetchRandomMeal.fulfilled, (state, action) => {
        state.randomMeal = action.payload;
      })
      .addCase(fetchMealsByCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMealsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchMealsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch meals.";
      });
  },
});

export const { toggleFavorite, loadFavorites, clearMeals } = mealSlice.actions;

export default mealSlice.reducer;
