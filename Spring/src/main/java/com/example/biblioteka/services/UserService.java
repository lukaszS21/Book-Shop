package com.example.biblioteka.services;

import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository=userRepository;
    }
    public UserRepository getUserRepository() {
        return userRepository;
    }

    public Users addUser(Users newUser){
        newUser.setEmail("lukaszstolarz@op.pl");
        return newUser;
    }
    public Users save(Users user){return save(user);}
}
