import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe({...recipe, title, description });
        alert('Recipe updated!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)} />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-2">
  Save Changes
</button>

        </form>
    );
};

export default EditRecipeForm;