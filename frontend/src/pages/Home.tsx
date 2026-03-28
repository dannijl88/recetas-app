import { useEffect, useState } from "react"
import type { Recipe } from "../types/index"
import { deleteRecipe, getAllRecipes } from "../services/recipeService"
import { Navbar } from "../components/NavBar"
import { RecipeCard } from "../components/RecipeCard"
import { Footer } from "../components/Footer"

export const Home = () => {

    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 9;

    useEffect(() => {
        getAllRecipes().then(data => setRecipes(data))
    }, [])

    const handleDelete = async (id: number) => {
        await deleteRecipe(id);
        setRecipes(recipes.filter(recipe => recipe.id !== id));
    }  

    return (
        <div className="min-h-screen bg-gray-950 flex flex-col">
            <Navbar />
            <div className="max-w-6xl mx-auto flex-1">
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
                    {recipes.filter((recipe) => recipe.title.toLowerCase().includes(search.toLowerCase())).slice((currentPage -1) * recipesPerPage, currentPage * recipesPerPage).map(recipe => (
                        <RecipeCard key={recipe.id} onDelete={handleDelete} recipe={recipe}/>
                    ))}
                </div>
                <div className="flex gap-5 justify-center">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="my-5 px-4 py-2 rounded-lg cursor-pointer text-white bg-orange-500 hover:bg-orange-600 transition-colors text-sm disabled:opacity-50">
                        Anterior
                    </button>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage * recipesPerPage >= recipes.length}
                        className="my-5 px-4 py-2 rounded-lg cursor-pointer text-white bg-orange-500 hover:bg-orange-600 transition-colors text-sm disabled:opacity-50">
                        Siguiente
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}