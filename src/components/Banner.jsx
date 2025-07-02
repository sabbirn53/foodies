import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomMeal } from "../features/meals/mealSlice";

export default function Banner() {
  const dispatch = useDispatch();
  const meal = useSelector((state) => state.meals.randomMeal);

  useEffect(() => {
    dispatch(fetchRandomMeal());
  }, [dispatch]);

  return (
    <div
      className="relative h-[500px] bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${meal?.strMealThumb || ""})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
      <div className="relative z-10 max-w-2xl px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold font-heading">{meal?.strMeal || "Loading..."}</h1>
        <p className="mb-6 text-lg text-gray-200">
          Your next favorite recipe is just a click away.
        </p>
        <button
          onClick={() => dispatch(fetchRandomMeal())}
          className="inline-block px-6 py-3 font-medium text-white transition rounded-full bg-brand hover:bg-orange-500"
        >
          Explore Recipes
        </button>
      </div>
    </div>
  );
}
