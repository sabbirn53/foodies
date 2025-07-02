import { useSelector } from "react-redux";
import MealCard from "../components/MealCard";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.meals.favorites);
  const meals = useSelector((state) => state.meals.items);

  // Filter meals that are in favorites
  const favoriteMeals = meals.filter((meal) => favorites.includes(meal.idMeal));

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="mb-6 text-3xl font-bold">Your Favorites</h1>
      {favoriteMeals.length === 0 ? (
        <p>You have no favorite meals yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {favoriteMeals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
