package com.example.biblioteka.controler;

import com.example.biblioteka.model.Basket;
import com.example.biblioteka.model.BookBasket;
import com.example.biblioteka.model.Books;
import com.example.biblioteka.repository.BasketRepository;
import com.example.biblioteka.repository.BookBasketRepository;
import com.example.biblioteka.repository.BookRepository;
import com.example.biblioteka.repository.UserRepository;
import com.example.biblioteka.services.JsonToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BasketController {
    private final UserRepository userRepository;
    private final BasketRepository basketRepository;
    private final BookRepository bookRepository;
    private final BookBasketRepository bookBasketRepository;


    @Autowired
    public BasketController(UserRepository userRepository, BasketRepository basketRepository, BookRepository bookRepository, BookBasketRepository bookBasketRepository) {
        this.userRepository= userRepository;
        this.basketRepository = basketRepository;
        this.bookRepository = bookRepository;
        this.bookBasketRepository = bookBasketRepository;
    }
    @PostMapping(value = "/addToBasket/{id_book}/{id_user}")
    public void addBasket(@PathVariable("id_book")Long id_book ,@PathVariable("id_user")Long id_user){

        System.out.println(id_user);
        Long basket_id =userRepository.getByUserId(id_user);
        Basket basket=basketRepository.findById(basket_id).orElse(null);
        Books books=bookRepository.findById(id_book).get();
        BookBasket bookBasket=new BookBasket(basket,books);
        bookBasketRepository.save(bookBasket);
        System.out.println(id_book);


    }
    @GetMapping(value = "/GetListBook/{id_user}")
    public List<Books> getListBasket(@PathVariable("id_user")Long id_user){
        System.out.println(id_user);
        Long basket_id =userRepository.getByUserId(id_user);
        Basket basket=basketRepository.findById(basket_id).orElse(null);
        System.out.println(basket);

        List<Long> bookBaskets =bookBasketRepository.findAllByBasket_Id(basket_id);
        System.out.println(bookBaskets);
        List<Books> books = new ArrayList<>();
        bookBaskets.forEach(book->books.add(bookRepository.findById(book).orElse(null)));


        return books;
    }

}

