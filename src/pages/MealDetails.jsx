import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as mealApi from "../api/mealapi";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      setLoading(true);
      setError(null);
      try {
        const data = await mealApi.getMealById(id);
        setMeal(data);
      } catch (err) {
        setError("Failed to load meal details.");
      } finally {
        setLoading(false);
      }
    }
    fetchMeal();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!meal) return <p className="p-4">Meal not found.</p>;

  // Extract ingredients and measures (MealDB structure)
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure ? measure : ""} ${ingredient}`.trim());
    }
  }

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <Link to="/search" className="inline-block mb-4 text-brand hover:underline">
        &larr; Back to Search
      </Link>

      <h1 className="mb-4 text-3xl font-bold">{meal.strMeal}</h1>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-lg mb-6 w-full max-h-[400px] object-cover"
      />

      <h2 className="mb-2 text-2xl font-semibold">Ingredients</h2>
      <ul className="mb-6 list-disc list-inside">
        {ingredients.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="mb-2 text-2xl font-semibold">Instructions</h2>
      <p className="whitespace-pre-line">{meal.strInstructions}</p>
    </div>
  );
}
