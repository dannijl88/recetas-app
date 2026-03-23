import api from './api';
import type { Category } from '../types/index';

export const getAllCategories = async (): Promise<Category[]> => {
    const response = await api.get("/categories");
    return response.data;
}

export const getCategoryById = async (id: number): Promise<Category> => {
    const response = await api.get("/categories/" + id);
    return response.data;
}

export const createCategory = async (data: Partial<Category>) => {
    const response = await api.post("/categories", data);
    return response.data;
}

export const updateCategory = async (id: number, data: Partial<Category>) => {
    const response = await api.put("/categories/" + id, data);
    return response.data;
}

export const deleteCategory = async (id: number) => {
    await api.delete("/categories/" + id);
}