package com.example.biblioteka.repository;

import com.example.biblioteka.model.Author;
import com.example.biblioteka.model.Books;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AuthorRepository extends CrudRepository<Author, Long> {

//    @Query(value = "SELECT * FROM author INNER JOIN book b on author.author_id = b.id_author WHERE b.type = Type2;", nativeQuery = true)
//    Author getAuthor(String Type2);
//    Optional <Author>getAuthorById();
}