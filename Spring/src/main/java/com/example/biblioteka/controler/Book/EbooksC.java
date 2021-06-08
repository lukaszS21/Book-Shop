package com.example.biblioteka.controler.Book;

import com.example.biblioteka.model.Books;
import com.example.biblioteka.repository.BookRepository;
import com.example.biblioteka.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("book")
public class EbooksC {

    private BookService books;
    private final BookRepository bookRepository;
    @Autowired
    public EbooksC(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }



    @GetMapping("/Ebooks")
    public List<Books> getBooksByType(){
        List<Books> books = new ArrayList<>();
        bookRepository.findByType("Ebooks").forEach(books::add);
        return books;
    }

}