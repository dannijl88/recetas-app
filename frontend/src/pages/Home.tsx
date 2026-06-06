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

    const filtered = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filtered.length / recipesPerPage);
    const paginated = filtered.slice(
        (currentPage - 1) * recipesPerPage,
        currentPage * recipesPerPage
    );

    return (
        <div className="min-h-screen bg-gray-950 flex flex-col">
            <Navbar />
            <div className="max-w-6xl mx-auto w-full px-8 py-6 flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">Recetas</h2>
                <input
                    type="text"
                    placeholder="Buscar"
                    value={search}
                    onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
                    className="w-full mb-8 px-4 py-2 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-800 focus:outline-none focus:border-orange-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {paginated.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDelete} />
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-lg text-white bg-gray-800 hover:bg-gray-700 disabled:opacity-40 transition-colors text-sm">
                            Anterior
                        </button>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-lg text-white bg-orange-500 hover:bg-orange-600 disabled:opacity-40 transition-colors text-sm">
                            Siguiente
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}