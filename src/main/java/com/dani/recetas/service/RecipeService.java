package com.dani.recetas.service;

import com.dani.recetas.dto.RecipeRequestDTO;
import com.dani.recetas.dto.RecipeResponseDTO;
import com.dani.recetas.exception.RecipeNotFoundException;
import com.dani.recetas.exception.UserNotFoundException;
import com.dani.recetas.mapper.RecipeMapper;
import com.dani.recetas.model.Category;
import com.dani.recetas.model.Recipe;
import com.dani.recetas.model.User;
import com.dani.recetas.repository.CategoryRepository;
import com.dani.recetas.repository.RecipeRepository;
import com.dani.recetas.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    public List<RecipeResponseDTO> getAllRecipes(){
        return recipeRepository.findAll().stream().map(RecipeMapper::toDTO).collect(Collectors.toList());
    }

    public RecipeResponseDTO getById(Long id){
        Recipe recipeBD = recipeRepository.findById(id).orElseThrow(() -> new RecipeNotFoundException("Recipe not found"));
        return RecipeMapper.toDTO(recipeBD);
    }

    public RecipeResponseDTO createRecipe(RecipeRequestDTO dto){
        User user = userRepository.findById(dto.getUserId()).orElseThrow(() -> new UserNotFoundException("User not found"));
        List<Category> categories = categoryRepository.findAllById(dto.getCategoryIds());

        Recipe recipe = RecipeMapper.toEntity(dto, user, categories);
        Recipe savedRecipe = recipeRepository.save(recipe);
        return RecipeMapper.toDTO(savedRecipe);
    }

    public RecipeResponseDTO updateRecipe(RecipeRequestDTO dto, Long id){
        User user = userRepository.findById(dto.getUserId()).orElseThrow(() -> new UserNotFoundException("User not found"));
        List<Category> categories = categoryRepository.findAllById(dto.getCategoryIds());
        Recipe recipe = RecipeMapper.toEntity(dto, user, categories);
       Recipe recipeBD = recipeRepository.findById(id).orElseThrow(() -> new RecipeNotFoundException("Recipe not found"));
       recipeBD.setTitle(recipe.getTitle());
       recipeBD.setDescription(recipe.getDescription());
       recipeBD.setPreparationTime(recipe.getPreparationTime());
       recipeBD.setIngredients(recipe.getIngredients());
       Recipe updatedRecipe = recipeRepository.save(recipeBD);
       return RecipeMapper.toDTO(updatedRecipe);
    }

    public void deleteRecipe(Long id){
        Recipe recipeBD = recipeRepository.findById(id).orElseThrow(() -> new RecipeNotFoundException("Recipe not found"));
        recipeRepository.delete(recipeBD);
    }
}
