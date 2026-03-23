import api from './api';

export const login = async (username: string, password: string) => {
    const response = await api.post("/auth/login", {username, password});
    const token = response.headers['authorization'];
    return token;
}

export const register = async (username: string, email: string, password: string) => {
    await api.post("/auth/register", {username, email, password});
}