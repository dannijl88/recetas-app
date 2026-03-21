package com.dani.recetas.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;

@Setter @Getter
@NoArgsConstructor
@AllArgsConstructor
public class RecipeRequestDTO {

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotBlank
    private String ingredients;

    @NotBlank
    private String preparationTime;

    @NotNull
    private Long userId;

    private List<Long> categoryIds;
}
