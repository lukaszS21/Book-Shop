package com.example.biblioteka.controler;

import com.example.biblioteka.model.Author;
import com.example.biblioteka.model.Basket;
import com.example.biblioteka.model.BookBasket;
import com.example.biblioteka.model.Books;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BasketController {
    @PostMapping(value = "/Basket")
    public void addBasket(@RequestBody Books books){

        System.out.println(books);
        Basket basket = new Basket();
        BookBasket bookBasket=new BookBasket(basket,books);

    }

}

