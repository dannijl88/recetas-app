package com.dani.recetas.controller;

import com.dani.recetas.dto.RecipeRequestDTO;
import com.dani.recetas.dto.RecipeResponseDTO;
import com.dani.recetas.model.Recipe;
import com.dani.recetas.service.RecipeService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @GetMapping
    public List<RecipeResponseDTO> getAllRecipes(){
        return recipeService.getAllRecipes();
    }

    @GetMapping("/{id}")
    public RecipeResponseDTO getRecipeById(@PathVariable Long id){
        return recipeService.getById(id);
    }

    @PostMapping
    public RecipeResponseDTO createRecipe(@RequestBody @Valid RecipeRequestDTO recipe){
        return recipeService.createRecipe(recipe);
    }

    @PutMapping("/{id}")
    public RecipeResponseDTO updateRecipe(@RequestBody @Valid RecipeRequestDTO recipe, @PathVariable Long id){
        return recipeService.updateRecipe(recipe, id);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable Long id){
        recipeService.deleteRecipe(id);
    }
}
