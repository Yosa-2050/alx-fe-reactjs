import { useState } from "react";

export default function AddRecipeForm({ onAddRecipe }) {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] =useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault();
       
       if (!title.trim() || !ingredients.trim() || !steps.trim()) {
        setError("All fields are required.");
        return;
       }
         setError("");

         onAddRecipe({
            id:Data.now(),
            title,
            ingredients: ingredientList,
            steps
         });
            setTitle("");
            setIngredients("");
            setSteps("");
    };
     return (
        <form 
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-4"
        >
            <h2 className="text-2xl font-bold text-gray-800 text-center">
                Add New Recipe
            </h2>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div> 
                <Label className="block text-gray-700 font-medium mb-2">Title</Label>
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter recipe title"
                />
            </div>

            <div>
        <label className="block text-gray-700 font-medium mb-1">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter ingredients separated by commas"
          rows="3"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter preparation steps"
          rows="4"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Add Recipe
      </button>
        </form>
     );
}