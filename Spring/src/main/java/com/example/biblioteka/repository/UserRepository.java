package com.example.biblioteka.repository;
import com.example.biblioteka.model.Basket;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.biblioteka.model.Users;

import java.util.Optional;
@Repository
public interface UserRepository extends CrudRepository<Users, Long> {
    Users getUserByEmailAndPassword(String email, String password);
    
    Optional<Users> getUserByEmail(String email);


    @Query(value = "SELECT u.salt FROM users u WHERE u.email=?1", nativeQuery = true)
    String getSaltByEmail(String email);

    @Query(value = "SELECT u.salt FROM users u WHERE u.email=?1", nativeQuery = true)
    Optional<String> getSaltByEmail2(String email);
    @Query(value = "SELECT u.basket_id FROM users u WHERE u.id=?1", nativeQuery = true)
    Long getByUserId(Long id);



}