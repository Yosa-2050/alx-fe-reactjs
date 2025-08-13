import React, { useState, useEffect } from "react";
import recipesData from "../data.json";

export default function Homepage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Recipe Sharing Platform
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-blue-600 mb-2">{recipe.summary}</p>
            <a href="#" className="text-indigo-600 hover:underline">
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
