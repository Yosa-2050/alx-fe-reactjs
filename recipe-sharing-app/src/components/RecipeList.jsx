import { useRecipeStore } from '../store/recipeStore';
 
const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);
    return (
        <div>
            <h2>Recipes</h2>
            {recipes.length === 0 && <p>No recipes added yet.</p>}
            {recipes.map((recipe) => (
                <div key={recipe.id} className="border p-2 mb-2 rounded">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;