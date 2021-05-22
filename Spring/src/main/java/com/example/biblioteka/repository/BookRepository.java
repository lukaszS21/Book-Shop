package com.example.biblioteka.repository;
import com.example.biblioteka.model.Books;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository  extends CrudRepository<Books, Long> {
    Books getBooksByTITLE(String TITLE);

    List<Books> findByType(String type);
     Optional <Books>getBooksByType(String type);



}