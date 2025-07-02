import { useEffect, useState } from "react";
import * as mealApi from "../api/mealapi";
import { useDispatch } from "react-redux";
import { fetchMealsByCategory } from "../features/meals/mealSlice";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCategories() {
      const data = await mealApi.getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  const handleClick = (category) => {
    dispatch(fetchMealsByCategory(category));
  };

  return (
    <div className="relative z-10 my-12">
      <h2 className="mb-6 text-2xl font-bold">Browse by Category</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
        {categories.map((cat) => (
          <div
            key={cat.idCategory}
            onClick={() => handleClick(cat.strCategory)}
            className="p-3 text-center transition bg-white border rounded-lg cursor-pointer hover:shadow-lg dark:bg-gray-300"
          >
            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              className="object-cover w-20 h-20 mx-auto mb-2 rounded-full"
            />
            <p className="text-sm font-semibold">{cat.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
