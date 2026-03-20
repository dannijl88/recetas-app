package com.dani.recetas.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter @Getter
@NoArgsConstructor
@AllArgsConstructor
public class RecipeResponseDTO {

    private Long id;
    private String title;
    private String description;
    private String ingredients;
    private String preparationTime;
    private String userUsername;
    private List<String> categoryName;
}
