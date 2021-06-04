package com.example.biblioteka.controler.Book;

import com.example.biblioteka.model.Books;
import com.example.biblioteka.repository.BookRepository;
import com.example.biblioteka.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("book")
public class ForRentC {


    private BookService books;
    private final BookRepository bookRepository;
    @Autowired
    public ForRentC(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/ForRent")
    public List<Books> getBooksByType(){
        List<Books> books = new ArrayList<>();
        bookRepository.findByType("ForRent").forEach(books::add);
        return books;
    }

}