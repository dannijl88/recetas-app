import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <nav className="max-w-6xl mx-auto bg-gray-900 border-b border-gray-800 px-8 py-4 mb-6 rounded-2xl">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <span 
                    onClick={() => navigate('/')}
                    className="text-xl font-bold text-orange-500 cursor-pointer">
                    🍳 Recetas
                </span>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/recipes/create')}
                        className="text-gray-400 px-4 py-2 rounded-lg cursor-pointer hover:text-white hover:bg-orange-600 transition-colors text-sm ">
                        + Nueva receta
                    </button>
                    <button
                        onClick={handleLogout}
                        className="bg-gray-800 hover:bg-gray-700 cursor-pointer text-gray-300 px-4 py-2 rounded-lg text-sm transition-colors">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </nav>
    )
}