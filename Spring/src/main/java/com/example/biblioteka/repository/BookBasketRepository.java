package com.example.biblioteka.repository;

import com.example.biblioteka.model.BookBasket;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookBasketRepository extends CrudRepository<BookBasket, Long> {

    @Query(value = "SELECT book_id FROM book_in_basket WHERE basket_id = ?1", nativeQuery = true)
    List<Long> findAllByBasket_Id(Long id);
}