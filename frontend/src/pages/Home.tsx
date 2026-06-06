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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">
        <NavBar />
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-12">
            <h2 className="text-3xl font-bold text-white mb-8">🔥 Películas populares</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {movies.map(movie => (
                    <div
                        key={movie.id}
                        onClick={() => navigate(`/movie/${movie.id}`)}
                        className="group cursor-pointer rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full object-cover"
                        />
                        <div className="p-3">
                            <h3 className="text-white text-sm font-semibold line-clamp-1">{movie.title}</h3>
                            <p className="text-purple-400 text-xs mt-1">⭐ {movie.vote_average.toFixed(1)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)
}