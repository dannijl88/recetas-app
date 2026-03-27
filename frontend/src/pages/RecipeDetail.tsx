import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteRecipe, getById } from '../services/recipeService';
import type { Recipe } from '../types';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export const RecipeDetail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        getById(Number(id)).then(data => setRecipe(data))
    }, [])

    return (
    <div className="min-h-screen bg-gray-950 px-8 flex flex-col">
        <Navbar />
        <div className="flex-1 max-w-3xl mx-auto">
            <button 
                onClick={() => navigate(-1)}
                className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors">
                ← Volver
            </button>

            {recipe && (
                <div className="bg-gray-900 rounded-2xl p-8">
                    <h1 className="text-4xl font-bold text-white mb-2">{recipe.title}</h1>
                    <p className="text-gray-500 text-sm mb-8">Por @{recipe.userUsername}</p>

                    <div className="flex gap-4 mb-8">
                        <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
                            ⏱ {recipe.preparationTime}
                        </span>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-white mb-2">Descripción</h2>
                        <p className="text-gray-400">{recipe.description}</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-white mb-2">Ingredientes</h2>
                        <p className="text-gray-400">{recipe.ingredients}</p>
                    </div>
                    <div className='flex gap-3'>
                        <button
                            onClick={() => navigate(`/recipes/edit/${id}`)}
                            className="my-5 px-4 py-2 rounded-lg cursor-pointer text-white bg-orange-500 hover:bg-orange-600 transition-colors text-sm ">
                            Editar receta
                        </button>
                        <button
                            onClick={() => {
                                deleteRecipe(Number(id))
                                navigate("/");
                            }}
                            className="my-5 px-4 py-2 rounded-lg cursor-pointer text-white bg-orange-500 hover:bg-orange-600 transition-colors text-sm ">
                            Borrar receta
                        </button>
                    </div>
                </div>
            )}
        </div>
        <Footer />
    </div>
)
}