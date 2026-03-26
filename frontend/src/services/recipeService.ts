import api from './api';
import type { Recipe, RecipeRequest } from '../types/index';

export const getAllRecipes = async (): Promise<Recipe[]> => {
    const response = await api.get('/recipes');
    return response.data;
}

export const getById = async (id: number): Promise<Recipe> => {
    const response = await api.get(`/recipes/${id}`)
    return response.data;
}

export const createRecipe = async (data: RecipeRequest): Promise<Recipe> => {
    const response = await api.post('/recipes', data);
    return response.data;
}

export const updateRecipe = async (data: Partial<Recipe>, id: number) => {
    const response = await api.put('/recipes/' + id, data);
    return response.data;
}

export const deleteRecipe = async (id: number) => {
    await api.delete('/recipes/' + id);
}