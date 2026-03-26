import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

export const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const token = await login(username, password);
            localStorage.setItem("token", token);
            navigate("/");
        } catch (e) {
            setError("Usuario o contraseña incorrectos")
        }
    }

    return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-white mb-2">Bienvenido</h1>
                <p className="text-gray-400 mb-8">Inicia sesión para continuar</p>
                
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Usuario</label>
                        <input
                            type="text"
                            placeholder="Tu usuario"
                            className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    
                    <div>
                        <label className="text-sm text-gray-400 mb-1 block">Contraseña</label>
                        <input
                            type="password"
                            placeholder="Tu contraseña"
                            className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors mt-2"
                    onClick={ handleSubmit }>
                        Iniciar sesión
                    </button>

                    <p className="text-center text-gray-400 text-sm">
                        ¿No tienes cuenta? <a href="/register" className="text-orange-500 hover:underline">Regístrate</a>
                    </p>
                </div>
            </div>
        </div>
    )
}