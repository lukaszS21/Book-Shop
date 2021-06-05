package com.example.biblioteka.repository;

import com.example.biblioteka.model.UserDetails;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;



@Repository
public interface UserDetailsRepository  extends CrudRepository<UserDetails, Long> {




    @Query(value = "SELECT * FROM user_details  WHERE id=?1", nativeQuery = true)
    Optional<UserDetails> findById(Long id);

}
