import { FaUtensils } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-brand font-heading"
        >
          <FaUtensils />
          <span>Foodies</span>
        </Link>

        <div className="items-center hidden gap-6 font-medium text-gray-700 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-brand" : "hover:text-brand transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-1 text-brand"
                : "flex items-center gap-1 hover:text-brand transition"
            }
          >
            <FiSearch className="text-lg" />
            Search
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "text-brand" : "hover:text-brand transition"
            }
          >
            Favorites
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-brand" : "hover:text-brand transition"
            }
          >
            About
          </NavLink>
        </div>

        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col items-start gap-3 px-4 py-2 bg-white shadow-md md:hidden">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-brand"
          >
            Home
          </NavLink>

          <NavLink
            to="/search"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 hover:text-brand"
          >
            <FiSearch className="text-lg" />
            Search
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={() => setIsOpen(false)}
            className="hover:text-brand"
          >
            Favorites
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-brand"
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
}
