package com.example.biblioteka.controler.Book;


import com.example.biblioteka.model.Author;
import com.example.biblioteka.model.Books;
import com.example.biblioteka.repository.AuthorRepository;
import com.example.biblioteka.repository.UserRepository;
import org.springframework.web.bind.annotation.*;
import com.example.biblioteka.repository.BookRepository;
import com.example.biblioteka.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class BooksController {


    private BookService books;
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public BooksController(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @GetMapping("/AllBooks")
    public List<Books> getBooks(){
        List<Books> book = new ArrayList<>();
        bookRepository.findAll().forEach(book::add);
        return book;
    }
    @GetMapping("/Books")
   public void addBook(){
        Author author =new Author("janusz","ok","..");
        authorRepository.save(author);
        Books books=new Books("1","1",1,1,"1","1","1",author);

        bookRepository.save(books);

   }

}