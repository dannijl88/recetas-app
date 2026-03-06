package com.dani.recetas.service;

import com.dani.recetas.model.Recipe;
import com.dani.recetas.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> getAllRecipes(){
        return recipeRepository.findAll();
    }

    public Recipe createRecipe(Recipe recipe){
        return recipeRepository.save(recipe);
    }

    public Recipe updateRecipe(Long id, Recipe recipe){
       Recipe recipeBD = recipeRepository.findById(id).orElseThrow();
       recipeBD.setTitle(recipe.getTitle());
       recipeBD.setDescription(recipe.getDescription());
       recipeBD.setPreparationTime(recipe.getPreparationTime());
       recipeBD.setIngredients(recipe.getIngredients());
       return recipeRepository.save(recipeBD);
    }

    public void deleteRecipe(Long id){
        Recipe recipeBD = recipeRepository.findById(id).orElseThrow();
        recipeRepository.delete(recipeBD);
    }
}
