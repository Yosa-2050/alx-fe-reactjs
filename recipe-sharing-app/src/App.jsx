
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing App</h1>
      
      <AddRecipeForm />
      <RecipeList />
      
    </div>
    
  );
}

export default App;
