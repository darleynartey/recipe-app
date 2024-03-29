import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipe from "./Pages/recipe";
import Recipes from "./Pages/recipes";
import AddRecipe from "./Pages/add-recipe";

const router = createBrowserRouter([
  { path: "/", element: <Recipes /> },
  { path: "/recipes", element: <Recipes /> },
  { path: "/recipes/:id", element: <Recipe /> },
  { path: "/add-recipe", element: <AddRecipe /> }

]);

function App() {
  return <RouterProvider router={router} />;
  
}

export default App;
