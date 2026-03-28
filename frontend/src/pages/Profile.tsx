import { useEffect, useState } from "react"
import { getCurrentUser } from "../services/userService";
import type { Recipe, User } from "../types";
import { Navbar } from "../components/NavBar";
import { useNavigate } from 'react-router-dom';
import { deleteRecipe,getAllRecipes } from "../services/recipeService";
import { RecipeCard } from "../components/RecipeCard";
import { Footer } from "../components/Footer";

export const Profile = () => {

    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<User>();
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    
    useEffect(() => {
        getCurrentUser().then(user => {
            setCurrentUser(user);
                getAllRecipes().then(recipes => {
                setRecipes(recipes.filter(recipe => recipe.userUsername === user.username));
            });
        });
        
    }, [])

    const handleDelete = async (id: number) => {
            await deleteRecipe(id);
            setRecipes(recipes.filter(recipe => recipe.id !== id));
        }  

    return (
        <div className="min-h-screen bg-gray-950 flex flex-col">
            <Navbar />
            <div className="max-w-3xl mx-auto mt-8 flex-1">
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors">
                    ← Volver
                </button>
                <div className="bg-gray-900 rounded-2xl p-8 mb-8">
                    <div className="flex items-center gap-6">
                        <div className="text-6xl">🧑‍🍳</div>
                        <div>
                            <h1 className="text-3xl font-bold text-white">{currentUser?.username}</h1>
                            <p className="text-gray-400 mt-1">{currentUser?.email}</p>
                            <p className="text-gray-500 text-sm mt-2">{recipes.length} recetas publicadas</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-4">Mis recetas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDelete} />
                    ))}
                    {recipes.length === 0 && (
                        <p className="text-gray-500 col-span-full">Aún no has creado ninguna receta.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}