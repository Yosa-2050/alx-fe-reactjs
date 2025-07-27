import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="border p-4 rounded">
              <h3 className="text-xl font-bold">{recipe.title}</h3>
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 underline">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
