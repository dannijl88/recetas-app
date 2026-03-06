package com.dani.recetas.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RecipeNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse recipeNotFoundException(RecipeNotFoundException ex){
        ErrorResponse error = new ErrorResponse(404, ex.getMessage());
        return error;
    }

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse userNotFoundException(UserNotFoundException ex){
        ErrorResponse error = new ErrorResponse(404, ex.getMessage());
        return error;
    }

    @ExceptionHandler(CategoryNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ErrorResponse categoryNotFoundException(CategoryNotFoundException ex){
        ErrorResponse error = new ErrorResponse(404, ex.getMessage());
        return error;
    }
}
