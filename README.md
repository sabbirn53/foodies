# 🍽️ Foodies

A responsive and modern web application for discovering and exploring meals from around the world using [TheMealDB API](https://www.themealdb.com/api.php).

Built with **React**, **Redux Toolkit**, and **Tailwind CSS**.

![Foodies Banner](https://www.themealdb.com/images/logo-small.png)

---

## 🚀 Features

### 🔍 Core Features
- Meal search by name
- Random meal discovery on banner
- Featured meals in slider
- Meal categories with filtering
- Favorites/bookmark support (with localStorage)
- Newsletter subscription (local simulation)
- Responsive design with modern UI

### 🎨 Design Features
- Fully responsive across devices
- Clean and consistent layout
- Interactive UI (hover, transitions)
- Blur backgrounds, custom icons, and sliders

---

## 🧑‍💻 Tech Stack

- ⚛️ React
- 🧰 Redux Toolkit
- 🎨 Tailwind CSS
- 🌐 React Router DOM
- 📦 Axios
- 🎠 SwiperJS (for carousel)
- 🎯 TheMealDB API

---

## 📁 Project Structure

src/
├── api/ # All MealDB API calls
├── components/ # Reusable UI components
├── features/ # Redux Toolkit slices
├── pages/ # Route pages (Home, Search, Favorites)
├── App.jsx # Main layout
├── main.jsx # React root
└── app/store.js # Redux store setup

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sabbirn53/foodies.git
cd foodies


##Install dependencies
npm install
npm install react-redux @reduxjs/toolkit axios react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p