import { useEffect, useState } from "react"
import type { Recipe } from "../types/index"
import { deleteRecipe, getAllRecipes } from "../services/recipeService"
import { Navbar } from "../components/NavBar"
import { RecipeCard } from "../components/RecipeCard"
import { Footer } from "../components/Footer"

export const Home = () => {

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [search, setSearch] = useState("");

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
                <div className="my-10">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recipes.filter((recipe) => recipe.title.toLowerCase().includes(search.toLowerCase())).map(recipe => (
                        <RecipeCard onDelete={handleDelete} recipe={recipe}/>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}