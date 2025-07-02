import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals, clearMeals } from "../features/meals/mealSlice";
import { useSearchParams } from "react-router-dom";
import MealCard from "../components/MealCard";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.items);
  const status = useSelector((state) => state.meals.status);
  const error = useSelector((state) => state.meals.error);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [input, setInput] = useState(query);

  useEffect(() => {
    if (query) {
      dispatch(fetchMeals(query));
    } else {
      dispatch(clearMeals());
    }
  }, [dispatch, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchParams({ q: input.trim() });
    }
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Search meals..."
          className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 text-white transition rounded-md bg-brand hover:bg-orange-500"
        >
          <FiSearch/>
        </button>
      </form>

      {status === "loading" && <p>Loading meals...</p>}
      {status === "failed" && <p className="text-red-500">{error}</p>}
      {status === "succeeded" && meals.length === 0 && <p>No meals found.</p>}

      {status === "succeeded" && meals.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}
