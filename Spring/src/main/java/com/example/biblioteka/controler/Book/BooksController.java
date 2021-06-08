package com.example.biblioteka.controler.Book;

import com.example.biblioteka.model.Author;
import com.example.biblioteka.model.Books;
import com.example.biblioteka.repository.AuthorRepository;
import org.springframework.web.bind.annotation.*;
import com.example.biblioteka.repository.BookRepository;
import com.example.biblioteka.services.BookService;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("book")
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

    @PostMapping(value = "/AddBook")
    public void addBook(@RequestBody Books books){

        System.out.println(books);
        if(authorRepository.findByName(books.getAuthor().getName())!=null){
            books.setAuthor(authorRepository.getAuthorByName(books.getAuthor().getName()));
        }
        else {
            Author author=new Author(books.getAuthor().getName(),books.getAuthor().getSurname(),books.getAuthor().getPublishing_house());
            authorRepository.save(author);
            books.setAuthor(author);
        }

        bookRepository.save(books);
    }

}