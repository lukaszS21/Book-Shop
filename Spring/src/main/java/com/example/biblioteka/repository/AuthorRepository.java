package com.example.biblioteka.repository;

import com.example.biblioteka.model.Author;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends CrudRepository<Author, Long> {

        Author getAuthorByName(String name);
        Author findByName(String name);
}