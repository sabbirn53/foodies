import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadFavorites } from "./features/meals/mealSlice";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Search from "./pages/Search";
import MealDetails from "./pages/MealDetails";
import FavoritesPage from "./pages/FavoritesPage";
import bgImage from "./assets/banner.jpg"

const bgstyle={
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen text-gray-900 bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/meal/:id" element={<MealDetails />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
