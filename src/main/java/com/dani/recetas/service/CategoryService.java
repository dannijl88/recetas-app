package com.dani.recetas.service;

import com.dani.recetas.exception.CategoryNotFoundException;
import com.dani.recetas.exception.UserNotFoundException;
import com.dani.recetas.model.Category;
import com.dani.recetas.model.User;
import com.dani.recetas.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    public Category getById(Long id){
        Category categoryBD = categoryRepository.findById(id).orElseThrow(() -> new UserNotFoundException("Category not found"));
        return categoryBD;
    }

    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }

    public Category updateCategory(Category category, Long id){
        Category categoryBD = categoryRepository.findById(id).orElseThrow(() -> new CategoryNotFoundException("Category not found"));
        categoryBD.setName(category.getName());
        return categoryRepository.save(categoryBD);
    }

    public void deleteCategory(Long id){
        Category categoryBD = categoryRepository.findById(id).orElseThrow(() -> new CategoryNotFoundException("Category not found"));
        categoryRepository.delete(categoryBD);
    }
}
