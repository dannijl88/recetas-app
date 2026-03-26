package com.dani.recetas.service;

import com.dani.recetas.dto.UserRequestDTO;
import com.dani.recetas.dto.UserResponseDTO;
import com.dani.recetas.exception.UserNotFoundException;
import com.dani.recetas.mapper.UserMapper;
import com.dani.recetas.model.User;
import com.dani.recetas.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<UserResponseDTO> getAllUsers() {
        return userRepository.findAll().stream().map(UserMapper::toDTO).collect(Collectors.toList());
    }

    public UserResponseDTO getById(Long id) {
        User userBD = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found"));
        return UserMapper.toDTO(userBD);
    }

    public UserResponseDTO getByUsername(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
        return UserMapper.toDTO(user);
    }

    public UserResponseDTO createUser(UserRequestDTO dto) {
        User user = UserMapper.toEntity(dto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return UserMapper.toDTO(savedUser);
    }

    public UserResponseDTO updateUser(UserRequestDTO dto, Long id) {
        User user = UserMapper.toEntity(dto);
        User userBD = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found"));
        userBD.setUsername(user.getUsername());
        userBD.setEmail(user.getEmail());
        userBD.setPassword(user.getPassword());
        User updatedUser = userRepository.save(userBD);
        return UserMapper.toDTO(updatedUser);
    }

    public void deleteUser(Long id) {
        User userBD = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found"));
        userRepository.delete(userBD);
    }
}
