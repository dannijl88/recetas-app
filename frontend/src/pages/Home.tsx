import { useEffect, useState } from "react"
import type { Recipe } from "../types/index"
import { getAllRecipes } from "../services/recipeService"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate();
    const [recipes, setRecipes] = useState<Recipe[]>([])

    useEffect(() => {
        getAllRecipes().then(data => setRecipes(data))
    }, [])

    return (
        <div className="min-h-screen bg-gray-950 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-white">Recetas</h1>
                    <button onClick={() => navigate('/recipes/create')} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                        + Nueva receta
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recipes.map(recipe => (
                        <div key={recipe.id} onClick={() => navigate(`/recipes/${recipe.id}`)} className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer">
                            <h2 className="text-xl font-bold text-white mb-2">{recipe.title}</h2>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-orange-500 text-sm font-medium">⏱ {recipe.preparationTime}</span>
                                <span className="text-gray-500 text-sm">@{recipe.userUsername}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}