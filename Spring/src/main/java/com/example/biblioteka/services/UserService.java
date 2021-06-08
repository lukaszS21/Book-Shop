package com.example.biblioteka.services;

import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

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

    public Optional<Users>findById(Long id){
        return  userRepository.findById(id);
    }
    public Iterable<Users> findAll(){
        return  userRepository.findAll();
    }
    public Users save(Users user){
        return  userRepository.save(user);
    }
    public void deleteById(Long id){
        userRepository.deleteById(id);
    }


}
