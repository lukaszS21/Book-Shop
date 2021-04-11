package com.example.biblioteka.controler;

import com.example.biblioteka.model.Books;


import com.example.biblioteka.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.sun.istack.Nullable;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/books")
public class AudioBooksC {
    private final BookRepository bookRepository;
    @Autowired
    public AudioBooksC(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/all")
    public List<Books> getBooks(){
        List<Books> book = new ArrayList<>();
        bookRepository.findAll().forEach(book::add);
        return book;
    }


}