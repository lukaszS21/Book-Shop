package com.example.biblioteka.controler;

import net.javaguides.library.model.Books;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;


@RestController
public class AudioBooksC {

    @GetMapping("/AudioBooks/{id}")
    public Books getAudioBooks(@PathVariable int id){
        return new Books("wiedzmin", "Sapkowski","NowaEra","super ksiazka",
                22,"Fantazy","Fantazy","Audiobooks", id=1);
    }
    @RequestMapping(value = "/AudioBooks")
    public List<Books> getAll(){
        Books book1= new Books("wiedzmin", "Sapkowski","NowaEra","super ksiazka",
                22,"Fantazy","Fantazy","Audiobooks", 1);
        Books book2= new Books("wiedzmin2", "Sapkowski","NowaEra","super ksiazka",
                22,"Fantazy","Fantazy","Audiobooks", 2);
        return Arrays.asList(book1,book2);

    }

}