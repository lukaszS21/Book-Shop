package com.example.biblioteka.controler;

import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.UserRepository;
import com.example.biblioteka.services.JsonToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;


import javax.validation.Valid;

public class RegisterController {
    private final UserRepository userRepository;

    /*
     * constructor
     *
     * @Param userRepository
     * */
    @Autowired
    public RegisterController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @PostMapping(value = "/register", consumes = "application/json")
    public ResponseEntity<String> registerUser(@RequestBody Users user) {

        if(userRepository.getUserByEmail(user.getEmail()).isPresent())
            return new ResponseEntity<>("User with this email already exists", HttpStatus.CONFLICT);

        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        userRepository.save(user);

        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }
}
