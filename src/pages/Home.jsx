import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "../features/meals/mealSlice";
import Banner from "../components/Banner";
import FeaturedSlider from "../components/FeaturedSlider";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter"; // <-- Import Newsletter

export default function Home() {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.items);
  const status = useSelector((state) => state.meals.status);
  const error = useSelector((state) => state.meals.error);

  useEffect(() => {
    dispatch(fetchMeals("chicken")); // default meal list
  }, [dispatch]);

  return (
    <div className="relative px-4 py-8 mx-auto max-w-7xl">
      <Banner />

      {/* Categories Section */}
      <div className="relative z-0">
        <Categories />
      </div>

      {/* Featured Meals */}
      <section className="relative z-10 mt-12">
        <h2 className="mb-4 text-3xl font-bold">Featured Meals</h2>

        {status === "loading" && <p>Loading meals...</p>}
        {status === "failed" && <p className="text-red-500">{error}</p>}
        {status === "succeeded" && meals.length === 0 && <p>No meals found.</p>}

        {status === "succeeded" && meals.length > 0 && (
          <FeaturedSlider meals={meals} />
        )}
      </section>

      {/* Newsletter Signup Section */}
      <Newsletter />
    </div>
  );
}
