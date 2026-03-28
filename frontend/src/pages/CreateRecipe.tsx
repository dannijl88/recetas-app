import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createRecipe } from "../services/recipeService"
import { getCurrentUser } from "../services/userService"
import { Navbar } from "../components/NavBar"
import { Footer } from "../components/Footer"

export const CreateRecipe = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [preparationTime, setPreparationTime] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSumbit = async () => {
        try {
            const currentUser = await getCurrentUser();
            await createRecipe({title, description, ingredients, preparationTime, userId: currentUser.id, categoryIds: []});
            setSuccess(true);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (e) {
            setError("Error al crear la receta");
        }
    }

    return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
        <Navbar />
        <div className="max-w-2xl mx-auto flex-1 w-full">
            <button
                onClick={() => navigate(-1)}
                className="text-gray-400 hover:text-white mb-6 flex items-center gap-2 transition-colors">
                ← Volver
            </button>

            <div className="bg-gray-900 rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-white mb-8">Nueva receta</h1>

                <div className="flex flex-col gap-5">
                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Título</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            placeholder="Nombre de la receta"
                            className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Descripción</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Describe tu receta"
                            rows={3}
                            className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Ingredientes</label>
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            placeholder="Lista los ingredientes"
                            rows={4}
                            className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Tiempo de preparación</label>
                        <input
                            value={preparationTime}
                            onChange={(e) => setPreparationTime(e.target.value)}
                            type="text"
                            placeholder="Ej: 30 minutos"
                            className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    {success && <p className="text-green-500 text-sm text-center">Receta creada con éxito</p>}
                    <button
                        onClick={handleSumbit}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors mt-2">
                        Crear receta
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
}