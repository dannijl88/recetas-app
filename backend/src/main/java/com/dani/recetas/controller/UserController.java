package com.dani.recetas.controller;

import com.dani.recetas.dto.UserRequestDTO;
import com.dani.recetas.dto.UserResponseDTO;
import com.dani.recetas.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserResponseDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserResponseDTO getUserById(@PathVariable Long id) {
        return userService.getById(id);
    }

    @GetMapping("/me")
    public UserResponseDTO getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userService.getByUsername(username);
    }

    @PostMapping
    public UserResponseDTO createUser(@RequestBody @Valid UserRequestDTO user) {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public UserResponseDTO updateUser(@RequestBody @Valid UserRequestDTO user, @PathVariable Long id) {
        return userService.updateUser(user, id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
