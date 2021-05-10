package com.example.biblioteka.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.List;


import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "author")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Author implements Serializable {

    @Id
    @Column(name = "author_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String name;
    @NotEmpty
    private String surname;

    private String publishing_house;
    @JsonIgnore
    @OneToMany(mappedBy = "author",cascade = CascadeType.ALL)
    private List<Books> books;



    public Author(@NotEmpty String name, @NotEmpty String surname, String publishing_house) {
        this.name = name;
        this.surname = surname;
        this.publishing_house = publishing_house;
    }

    public Author() {

    }


    public List<Books> getBooks() {
        return books;
    }

    public void setBooks(List<Books> books) {
        this.books = books;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPublishing_house() {
        return publishing_house;
    }

    public void setPublishing_house(String publishing_house) {
        this.publishing_house = publishing_house;
    }

}
