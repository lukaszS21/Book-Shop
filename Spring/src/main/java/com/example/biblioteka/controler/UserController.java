package com.example.biblioteka.controler;

import com.example.biblioteka.model.Basket;
import com.example.biblioteka.model.UserDetails;
import com.example.biblioteka.model.Users;
import com.example.biblioteka.repository.UserDetailsRepository;
import com.example.biblioteka.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository userRepository;
    private final UserDetailsRepository userDetailsRepository;
    @Autowired
    public UserController(UserRepository userRepository, UserDetailsRepository userDetailsRepository) {
        this.userRepository = userRepository;
        this.userDetailsRepository = userDetailsRepository;
    }
    @GetMapping({"/Userall"})
    public List<Users> getUsers(){
        List<Users> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }


    @GetMapping("Id/{id}")
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



    @DeleteMapping("/Del")
    public void deleteUser(@RequestParam  long index){
        userRepository.deleteById(index);
    }
    @GetMapping("/add_admin")
    public void addUser() {
        Basket basket=new Basket();
        UserDetails userDetails=new UserDetails("lukasz","Stolarz","508963620","tu");
        Users user = new Users("lukasz@op.pl","1234", userDetails,basket);
        String salt = BCrypt.gensalt();
        String hashedPassword = BCrypt.hashpw(user.getPassword(), salt);
        user.setPassword(hashedPassword);
        user.setSalt(salt);
        user.setRole("ADMIN");
        userRepository.save(user);
    }
    @PutMapping("/UserDetails/{id_user}")
    public void changeDetails(@RequestBody Users details,@PathVariable("id_user")Long id_user){
        System.out.println(id_user);
        System.out.println(details);

        Optional<Users> users=userRepository.findById(id_user);
        Optional<UserDetails> details1=userDetailsRepository.findById(id_user);
        users.get().getUserDetails().setUsername(details.getUserDetails().getUsername());
        users.get().getUserDetails().setSurname(details.getUserDetails().getSurname());
        users.get().getUserDetails().setAdres(details.getUserDetails().getAdres());
        users.get().getUserDetails().setPhone(details.getUserDetails().getPhone());

        Users user = users.get();
        userRepository.save(user);


    }

}