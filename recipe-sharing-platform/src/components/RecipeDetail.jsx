import { useParams} from "react-router-dom";
import { useState, useEffect }  from "react";
import data from "../data.json";

export default function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) {
        return <div className="text-ceneter text-red-500 mt-10">Recipe not found!!</div>
   }
   return (
    <div className="max-w-2xl mx-auto p-6">
        <Link 
        to="/"
        className="inline-block mb4 text-indigo-600 hover:underline"
        >
           ← Back to Home
        </Link>
        <h1 className="text-3xl font-semibold mb-2">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title}  className="w-full rounded-lg shadow-lg mb-6" />
       <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
               <li key={index} className="text-gray-700">{ingredient}</li> 
            ))} 
            </ul>
            </section>

            <section>
                <h2 className="text2xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal pl-6 space-y-2">
                    {recipe.instructions.map((setp, index) => (
                        <li key={index} className="text-gray-700">{step}</li>
                    ))}
                    </ol>
            </section>
    </div>
   );
}