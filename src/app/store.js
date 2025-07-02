import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "../features/meals/mealSlice";

export const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
});
