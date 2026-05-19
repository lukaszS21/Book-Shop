package com.example.biblioteka.controler;

import com.example.biblioteka.model.Basket;
import com.example.biblioteka.model.UserDetails;
import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.UserDetailsRepository;
import com.example.biblioteka.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private static final String ADMIN_EMAIL = "lukasz@op.pl";
    private static final String ADMIN_PASSWORD = "1234";
    private static final String ADMIN_ROLE = "ADMIN";

    private final UserRepository userRepository;
    private final UserDetailsRepository userDetailsRepository;

    public UserController(
            UserRepository userRepository,
            UserDetailsRepository userDetailsRepository
    ) {
        this.userRepository = userRepository;
        this.userDetailsRepository = userDetailsRepository;
    }

    @GetMapping("/Userall")
    public List<Users> getUsers() {
        List<Users> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @GetMapping("Id/{id}")
    public ResponseEntity<Users> getUser(@PathVariable("id") Long id) {
        return userRepository.findById(id)
                .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/users")
    public Iterable<Users> getUser2() {
        return userRepository.findAll();
    }

    @PostMapping("/User/add")
    public Users addUser(@RequestBody Users newUser) {
        return userRepository.save(newUser);
    }

    @DeleteMapping("/Del")
    public void deleteUser(@RequestParam long index) {
        userRepository.deleteById(index);
    }

    @GetMapping("/add_admin")
    public ResponseEntity<String> addAdmin() {
        Optional<Users> existingAdmin = userRepository.getUserByEmail(ADMIN_EMAIL);

        if (existingAdmin.isPresent()) {
            return new ResponseEntity<>("Admin already exists", HttpStatus.OK);
        }

        Basket basket = new Basket();
        UserDetails userDetails = new UserDetails("lukasz", "Stolarz", "508963620", "tu");
        Users admin = new Users(ADMIN_EMAIL, ADMIN_PASSWORD, userDetails, basket);

        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(admin.getPassword(), salt);

        admin.setPassword(hashedPassword);
        admin.setSalt(salt);
        admin.setRole(ADMIN_ROLE);

        userRepository.save(admin);

        return new ResponseEntity<>("Admin created", HttpStatus.CREATED);
    }

    @PutMapping("/UserDetails/{id_user}")
    public ResponseEntity<Void> changeDetails(
            @RequestBody Users details,
            @PathVariable("id_user") Long idUser
    ) {
        Optional<Users> userOptional = userRepository.findById(idUser);

        if (userOptional.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Users user = userOptional.get();

        if (user.getUserDetails() == null || details.getUserDetails() == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        UserDetails currentDetails = user.getUserDetails();
        UserDetails newDetails = details.getUserDetails();

        currentDetails.setUsername(newDetails.getUsername());
        currentDetails.setSurname(newDetails.getSurname());
        currentDetails.setAdres(newDetails.getAdres());
        currentDetails.setPhone(newDetails.getPhone());

        userRepository.save(user);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}