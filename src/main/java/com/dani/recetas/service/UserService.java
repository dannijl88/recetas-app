package com.dani.recetas.service;

import com.dani.recetas.model.User;
import com.dani.recetas.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User createUser(User user){
        return userRepository.save(user);
    }

    public User updateUser(User user, Long id){
        User userBD = userRepository.findById(id).orElseThrow();
        userBD.setUsername(user.getUsername());
        userBD.setEmail(user.getEmail());
        userBD.setPassword(user.getPassword());
        return userRepository.save(userBD);
    }

    public void deleteUser(Long id){
        User userBD = userRepository.findById(id).orElseThrow();
        userRepository.delete(userBD);
    }
}
