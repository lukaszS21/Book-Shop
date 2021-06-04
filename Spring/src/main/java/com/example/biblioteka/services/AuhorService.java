package com.example.biblioteka.services;

import com.example.biblioteka.repository.AuthorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuhorService {
    private final AuthorRepository authorRepository;
    @Autowired

    public AuhorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }
}
