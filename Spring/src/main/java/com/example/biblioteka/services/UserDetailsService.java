package com.example.biblioteka.services;

import com.example.biblioteka.model.UserDetails;
import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.UserDetailsRepository;
import com.example.biblioteka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class  UserDetailsService {
    private final UserDetailsRepository userDetailsRepository;
    @Autowired
    public UserDetailsService(UserDetailsRepository userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }



    public UserDetailsRepository getUserDetailsRepository() {
        return userDetailsRepository;
    }


    public Optional<UserDetails> findById(Long id){
        return  userDetailsRepository.findById(id);
    }



}