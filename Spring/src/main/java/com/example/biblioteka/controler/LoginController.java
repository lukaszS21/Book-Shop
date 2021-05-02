package com.example.biblioteka.controler;
import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.UserRepository;
import com.example.biblioteka.services.JsonWebToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCrypt;

import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/home")
public class LoginController {
    private final UserRepository repository;
    private final JsonWebToken webTokenProvider;

    @Autowired
    public LoginController(UserRepository repository, JsonWebToken webTokenProvider) {
        this.repository = repository;
        this.webTokenProvider = webTokenProvider;
    }
    @PostMapping(value = "/login")
    public ResponseEntity<?> loginUser(@RequestParam("email") String email, @RequestParam("password") String password) {

        Optional<String> salt = repository.getSaltByEmail(email);
        if(salt.isPresent()) {

            Users loggedUser = repository.getUserByEmailAndPassword(
                    email,
                    BCrypt.hashpw(password, salt.get())
            );

            if(loggedUser==null)
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);

            loggedUser.setLogged(true);
            repository.save(loggedUser);

            Pair<Long, String> userIdWithTokenPair = Pair.of(loggedUser.getId(), webTokenProvider.generateToken(loggedUser));
            return new ResponseEntity<>(userIdWithTokenPair, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
