import { useEffect, useState } from "react"
import type { Recipe } from "../types/index"
import { deleteRecipe, getAllRecipes } from "../services/recipeService"
import { Navbar } from "../components/NavBar"
import { RecipeCard } from "../components/RecipeCard"
import { Footer } from "../components/Footer"

export const Home = () => {

    const [recipes, setRecipes] = useState<Recipe[]>([])

    useEffect(() => {
        getAllRecipes().then(data => setRecipes(data))
    }, [])

    const handleDelete = async (id: number) => {
        await deleteRecipe(id);
        setRecipes(recipes.filter(recipe => recipe.id !== id));
    }  

    return (
        <div className="min-h-screen bg-gray-950 px-9">
            <Navbar />
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-white">Recetas</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recipes.map(recipe => (
                        <RecipeCard onDelete={handleDelete} recipe={recipe}/>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}