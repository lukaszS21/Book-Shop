package com.example.biblioteka.controler;

import net.javaguides.library.model.User;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable int id){
        return new User("ja", "ty", id=1);
    }

}