import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../services/recipeService';
import type { Recipe } from '../types';
import { useNavigate } from 'react-router-dom';

export const RecipeDetail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        getById(Number(id)).then(data => setRecipe(data))
    }, [])

    return (
    <div className="min-h-screen bg-gray-950 p-8">
        <div className="max-w-3xl mx-auto">
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
                </div>
            )}
        </div>
    </div>
)
}