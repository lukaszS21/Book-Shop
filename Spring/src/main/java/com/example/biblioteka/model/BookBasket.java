package com.example.biblioteka.model;

import javax.persistence.*;

@Entity
@Table(name = "book_in_basket")
public class BookBasket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;


    @ManyToOne
    @JoinColumn(name = "basket_id")
    Basket basket;

    @ManyToOne
    @JoinColumn(name = "book_id")
    Books books;

    public BookBasket(Basket basket, Books books) {
        this.basket = basket;
        this.books = books;
    }

    public BookBasket() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Basket getBasket() {
        return basket;
    }

    public void setBasket(Basket basket) {
        this.basket = basket;
    }

    public Books getBooks() {
        return books;
    }

    public void setBooks(Books books) {
        this.books = books;
    }
}
