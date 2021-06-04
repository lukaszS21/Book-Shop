package com.example.biblioteka.repository;

import com.example.biblioteka.model.Author;
import com.example.biblioteka.model.Basket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  BasketRepository extends CrudRepository<Basket, Long> {
}
