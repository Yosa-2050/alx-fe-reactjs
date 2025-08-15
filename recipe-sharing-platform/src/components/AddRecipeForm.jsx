import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); 
  const [errors, setErrors] = useState({}); 

  
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please include at least two ingredients.";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddRecipe({
        title,
        ingredients: ingredients.split(",").map((ing) => ing.trim()),
        steps
      });
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 
                 sm:p-8 md:max-w-2xl"
    >
      <h2 className="text-2xl font-bold text-gray-800">Add New Recipe</h2>

      {/* Title */}
      <div>
        <label className="block text-gray-700 font-medium">Title</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block text-gray-700 font-medium">Ingredients (comma-separated)</label>
        <textarea
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="3"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps */}
      <div>
        <label className="block text-gray-700 font-medium">Preparation Steps</label>
        <textarea
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows="4"
        ></textarea>
        {errors.steps && (
          <p className="text-red-500 text-sm">{errors.steps}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
