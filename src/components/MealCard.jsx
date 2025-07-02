import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/meals/mealSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function MealCard({ meal }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.meals.favorites);
  const isFavorite = favorites.includes(meal.idMeal);

  return (
    <div className="relative overflow-hidden transition rounded shadow-lg hover:shadow-xl">
      <Link to={`/meal/${meal.idMeal}`}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="object-cover w-full h-48"
        />
      </Link>
      <div className="px-4 py-2">
        <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
      </div>
      <button
        onClick={() => dispatch(toggleFavorite(meal.idMeal))}
        aria-label="Toggle favorite"
        className="absolute text-xl transition top-2 right-2 text-brand hover:text-red-500"
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}
