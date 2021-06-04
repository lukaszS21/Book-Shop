package com.example.biblioteka.controler.Book;

import com.example.biblioteka.model.Author;
import com.example.biblioteka.model.Books;


import com.example.biblioteka.repository.AuthorRepository;
import com.example.biblioteka.repository.BookRepository;
import com.example.biblioteka.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import com.sun.istack.Nullable;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("book")
public class AudioBooksC {
    private BookService books;
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public AudioBooksC(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @GetMapping("/AudioBooks")
    public List<Books> getBooks(){
        List<Books> book = new ArrayList<>();
        bookRepository.findAll().forEach(book::add);
        return book;
    }
//    @GetMapping("/Audio")
//    public Optional<Books> getBookByID(@RequestParam int index){
//        return books.findByID(index);
//    }
    @GetMapping("/Audio")
    public List<Books> getBooksByType(){
        List<Books> books = new ArrayList<>();
       bookRepository.findByType("AudioBook").forEach(books::add);
        return books;
    }




}