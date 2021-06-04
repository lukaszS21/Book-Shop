package com.example.biblioteka.services;

import com.example.biblioteka.repository.BasketRepository;
import com.example.biblioteka.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BasketService {
    private final BasketRepository basketRepository;
    @Autowired
    public BasketService(BasketRepository basketRepository) {
        this.basketRepository = basketRepository;
    }

    public BasketRepository getBasketRepository() {
        return basketRepository;
    }

}
