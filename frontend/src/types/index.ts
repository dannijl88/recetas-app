export interface User{
    id: number;
    username: string;
    email: string;
}

export interface Recipe{
    id: number;
    title: string;
    description: string;
    ingredients: string;
    preparationTime: string;
    userUsername: string;
    categoryName: string;
}

export interface Category{
    id: number;
    name: string;
}

export interface RecipeRequest {
    title: string;
    description: string;
    ingredients: string;
    preparationTime: string;
    userId: number;
    categoryIds: number[];
}