import { useNavigate } from "react-router-dom";
import type { Recipe } from "../types";

interface Props {
    recipe: Recipe;
    onDelete: (id: number) => void;
}



export const RecipeCard = ({ recipe, onDelete }: Props) => {

    const navigate = useNavigate();

    return (
        
        <div key={recipe.id} className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors cursor-pointer relative">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (confirm("¿Estás seguro de que quieres eliminar esta receta?")) {
                        onDelete(recipe.id);
                    }
                }}
                className="absolute top-4 right-4 w-6 h-6 bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-full flex items-center justify-center text-sm transition-colors">
                −
            </button>
            <div onClick={() => navigate(`/recipes/${recipe.id}`)}>
                <h2 className="text-xl font-bold text-white mb-2">{recipe.title}</h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-orange-500 text-sm font-medium">⏱ {recipe.preparationTime}</span>
                    <span className="text-gray-500 text-sm">@{recipe.userUsername}</span>
                </div>
            </div>
            <button
                onClick={() => navigate(`/recipes/edit/${recipe.id}`)}
                className="my-5 px-4 py-2 rounded-lg cursor-pointer text-white bg-orange-500 hover:bg-orange-600 transition-colors text-sm ">
                Editar receta
            </button>
        </div>
    )}