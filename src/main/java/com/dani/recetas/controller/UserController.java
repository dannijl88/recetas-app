package com.dani.recetas.controller;

import com.dani.recetas.dto.UserRequestDTO;
import com.dani.recetas.dto.UserResponseDTO;
import com.dani.recetas.model.User;
import com.dani.recetas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserResponseDTO> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserResponseDTO getUserById(@PathVariable Long id){
        return userService.getById(id);
    }

    @PostMapping
    public UserResponseDTO createUser(@RequestBody UserRequestDTO user){
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public UserResponseDTO updateUser(@RequestBody UserRequestDTO user, @PathVariable Long id){
        return userService.updateUser(user, id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
}
