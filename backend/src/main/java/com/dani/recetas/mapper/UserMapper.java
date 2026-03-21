package com.dani.recetas.mapper;

import com.dani.recetas.dto.UserRequestDTO;
import com.dani.recetas.dto.UserResponseDTO;
import com.dani.recetas.model.User;

public class UserMapper {

    public static User toEntity(UserRequestDTO dto){
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        return user;
    }

    public static UserResponseDTO toDTO(User user){
        return new UserResponseDTO(user.getId(), user.getUsername(), user.getEmail());
    }
}
