package com.example.biblioteka.services;

import com.example.biblioteka.repository.BookBasketRepository;
import com.example.biblioteka.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

    @Service
    public class BookBasketService {
        private final BookBasketRepository bookBasketRepository;

        @Autowired

        public BookBasketService(BookBasketRepository bookBasketRepository) {
            this.bookBasketRepository = bookBasketRepository;
        }

        public BookBasketRepository getUserRepository() {
            return bookBasketRepository;
        }



    }