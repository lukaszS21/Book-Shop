package com.example.biblioteka.controler;

import com.example.biblioteka.model.UserDetails;
import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;
import com.sun.istack.Nullable;

import javax.validation.constraints.Null;
import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepository;
    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping({"/Userall"})
    public List<Users> getUsers(){
        List<Users> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Users> getUser(@PathVariable("id") Long id){
        return userRepository.findById(id).map(
                user -> new ResponseEntity<>(user, HttpStatus.OK)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND)
        );
    }
    @GetMapping("/users")
    public Iterable<Users> getUser2(){
        return userRepository.findAll();
    }

    @PostMapping("/User/add")
    public Users addUser(@RequestBody  Users newUser){
        return userRepository.save(newUser);
    }

    @PutMapping("/User/update")

    public Users  saveUser(@RequestBody  Users newUser){
        return userRepository.save(newUser);
    }
    @DeleteMapping("/Del")
    public void deleteUser(@RequestParam  long index){
        userRepository.deleteById(index);
    }
    @GetMapping("/add_admin")
    public void addUser() {
        UserDetails userDetails=new UserDetails("lukasz","Stolarz","508963620","tu");
        Users user = new Users("lukasz@op.pl","1234", userDetails);
        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        user.setRole("ADMIN");
        userRepository.save(user);
    }

}