package com.example.biblioteka.controler;
import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.UserRepository;
import com.example.biblioteka.services.JsonToken;
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
    private final UserRepository userRepository;
    private final JsonToken jsonToken;

    @Autowired
    public LoginController(UserRepository userRepository, JsonToken jsonToken) {
        this.userRepository = userRepository;
        this.jsonToken = jsonToken;
    }
    @PostMapping(value = "/login")
    public ResponseEntity<?> loggedUser(@RequestBody Users details){
        System.out.println(details.getEmail() + " " + details.getPassword());

        String salt = userRepository.getSaltByEmail(details.getEmail());

        if(salt==null){
            return null;
        }

        Users loginUser = userRepository.getUserByEmailAndPassword(
                details.getEmail(),
                BCrypt.hashpw(
                        details.getPassword(),
                        salt
                )

        );


        if(loginUser==null)
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        Pair<Long, String> userIdWithTokenPair = Pair.of(loginUser.getId(), jsonToken.generateToken(loginUser));
        return new ResponseEntity<>(userIdWithTokenPair, HttpStatus.OK);

    }
    @PostMapping(value = "/registration")
    public void registration(@RequestBody Users users){

        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(users.getPassword(), salt);
        users.setPassword(hashedPassword);
        users.setSalt(salt);
        users.setRole("USER");
        userRepository.save(users);
    }

}
