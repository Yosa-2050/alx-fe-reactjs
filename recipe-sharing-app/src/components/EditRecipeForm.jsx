import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault(); // ← remove this comment if needed
    updateRecipe({ ...recipe, title, description });
    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
      <h2 className="text-xl font-bold mb-2">Edit Recipe</h2>
      
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        className="w-full border border-gray-300 px-3 py-2 rounded mb-2"
        required
      />
      
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        className="w-full border border-gray-300 px-3 py-2 rounded mb-2"
        required
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
