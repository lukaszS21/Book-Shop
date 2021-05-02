package com.example.biblioteka.repository;
import com.example.biblioteka.model.Books;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository  extends CrudRepository<Books, Long> {
    Books getBooksByTITLE(String TITLE);
    @Query(value = "SELECT b.id_BOOK FROM book b WHERE TITLE=b.TITLE;", nativeQuery = true)
    String getTITLE(String TITLE);

}