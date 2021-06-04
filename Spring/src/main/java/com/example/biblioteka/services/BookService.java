package com.example.biblioteka.services;

import com.example.biblioteka.model.Books;
import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;



@Service
public class BookService {
    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository){
        this.bookRepository=bookRepository;
    }
    public BookRepository getUserRepository() {
        return bookRepository;
    }



}