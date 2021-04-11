package com.example.biblioteka.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.biblioteka.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User getUserByEmail(String email);
    @Query(value = "SELECT u.id FROM user u WHERE email=u.email;", nativeQuery = true)
    String getEmail(String email);
}