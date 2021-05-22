package com.example.biblioteka.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.biblioteka.model.Users;

import java.util.Optional;
@Repository
public interface UserRepository extends CrudRepository<Users, Long> {
    Users getUserByEmailAndPassword(String email, String password);
    
    Optional<Users> getUserByEmail(String email);

    /*
     * getSaltByEmail method provides user salt necessary for logging in
     *
     * @Param email
     * @Returns salt as String
     * */
    @Query(value = "SELECT u.salt FROM users u WHERE u.email=?1", nativeQuery = true)
    String getSaltByEmail(String email);



}