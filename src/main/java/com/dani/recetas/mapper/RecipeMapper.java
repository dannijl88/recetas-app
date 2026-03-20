package com.dani.recetas.mapper;

import com.dani.recetas.dto.RecipeRequestDTO;
import com.dani.recetas.dto.RecipeResponseDTO;
import com.dani.recetas.model.Category;
import com.dani.recetas.model.Recipe;
import com.dani.recetas.model.User;

import java.util.List;
import java.util.stream.Collectors;

public class RecipeMapper {

    public static Recipe toEntity(RecipeRequestDTO dto, User user, List<Category> categories){
        Recipe recipe = new Recipe();
        recipe.setTitle(dto.getTitle());
        recipe.setDescription(dto.getDescription());
        recipe.setIngredients(dto.getIngredients());
        recipe.setPreparationTime(dto.getPreparationTime());
        recipe.setUser(user);
        recipe.setCategory(categories);
        return recipe;
    }

    public static RecipeResponseDTO toDTO(Recipe recipe){
        return new RecipeResponseDTO(recipe.getId(), recipe.getTitle(), recipe.getDescription(), recipe.getIngredients(), recipe.getPreparationTime(), recipe.getUser().getUsername(), recipe.getCategory().stream().map(Category::getName).collect(Collectors.toList()));
    }
}
