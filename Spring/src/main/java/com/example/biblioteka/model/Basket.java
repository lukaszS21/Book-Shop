package com.example.biblioteka.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity

public class Basket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @OneToOne(mappedBy = "basket",cascade = CascadeType.ALL)
    private Users user;

    @JsonIgnore
    @OneToMany(mappedBy = "basket")
    private Set<BookBasket> bookbasket;

    public Basket() {

    }


    public Set<BookBasket> getBookbasket() {
        return bookbasket;
    }

    public void setBookbasket(Set<BookBasket> bookbasket) {
        this.bookbasket = bookbasket;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }


}
