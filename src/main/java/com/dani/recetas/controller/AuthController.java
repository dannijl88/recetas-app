package com.dani.recetas.controller;

import com.dani.recetas.dto.UserRequestDTO;
import com.dani.recetas.dto.UserResponseDTO;
import com.dani.recetas.service.UserService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public UserResponseDTO register(@Valid @RequestBody UserRequestDTO dto){
        return userService.createUser(dto);
    }
}
