import api from './api';
import type { User } from '../types/index';

export const getAllUsers = async (): Promise<User[]> => {
    const response = await api.get("/users");
    return response.data;
}

export const getUserById = async (id: number): Promise<User> => {
    const response = await api.get("/users/" + id);
    return response.data;
}

export const getCurrentUser = async (): Promise<User> => {
    const response = await api.get('/users/me');
    return response.data;
}

export const createUser = async (data: Partial<User>): Promise<User> => {
    const response = await api.post("/users", data);
    return response.data;
}

export const updateUser = async (data: Partial<User>, id: number): Promise<User> => {
    const response = await api.put("/users/" + id, data);
    return response.data;
}

export const deleteUser = async (id: number) => {
    await api.delete("users/" + id);
}