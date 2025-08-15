import { useState } from "react";
import AddRecipeForm from "../components/AddRecipeForm";

export default function AddRecipePage() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    console.log("New recipe added:", newRecipe);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
    </div>
  );
}
