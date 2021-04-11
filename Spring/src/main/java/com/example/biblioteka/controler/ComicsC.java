package com.example.biblioteka.controler;

import com.example.biblioteka.model.Books;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;


@RestController
public class ComicsC {

    @GetMapping("/Comics/{id}")
    public Books getAudioBooks(@PathVariable int id){
        return new Books("wiedzmin", "book",21,23,
                "fantazy",id=1);
    }
    @RequestMapping(value = "/Comics")
    public List<Books> getAll(){
        Books book1= new Books("wiedzmin", "book",21,23,
                "fantazy",1);
        Books book2= new Books("wiedzmin", "book",21,23,
                "fantazy",2);
        return Arrays.asList(book1,book2);

    }

}