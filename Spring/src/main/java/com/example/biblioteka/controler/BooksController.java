package com.example.biblioteka.controler;

import com.sun.istack.logging.Logger;
import net.javaguides.library.model.Books;
import org.springframework.web.bind.annotation.*;


import java.util.Arrays;
import java.util.List;

@RestController
public class BooksController {

    @GetMapping("/Books/{id}")
    public Books getAudioBooks(@PathVariable int id){
        return new Books("wiedzmin", "Sapkowski","NowaEra","super ksiazka",
                22,"Fantazy","Fantazy","Audiobooks", id=1);
    }
    @GetMapping(value = "/Book")
    public List<Books> getAll(){
        System.out.println("hi");
        Books book1= new Books("wiedzmin", "Sapkowski","NowaEra","super ksiazka",
                22,"Fantazy","Fantazy","Audiobooks", 1);
        Books book2= new Books("wiedzmin2", "Sapkowski","NowaEra","super ksiazka",
                22,"Fantazy","Fantazy","Audiobooks", 2);
        return Arrays.asList(book1,book2);

    }

}