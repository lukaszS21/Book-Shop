package com.example.biblioteka.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Optional;

@Entity
@Table(name="book")
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_BOOK;

    @NotEmpty
    @Column
    private String TITLE;


    @Column
    private String category;


    @Column
    private float PRICE;


    @Column
    private int QUANTITY;

    @Column
    private String type;
    @Column
    private String img;



    //@JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "id_Author")
    private Author author;

    @Column
    private String DESCRIPTION;

    public Books() {
    }
    public Books(String TITLE,  String DESCRIPTION,float PRICE,int QUANTITY,String category,String type,String img,Author author) {
        this.TITLE= TITLE;
        this.DESCRIPTION = DESCRIPTION;
        this.PRICE = PRICE;
        this.QUANTITY = QUANTITY;
        this.category = category;
        this.type=type;
        this.img=img;
        this.author=author;

        //this.id_BOOK = id_BOOK;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getId_BOOK() {
        return id_BOOK;
    }

    public void setId_BOOK(Long id_BOOK) {
        this.id_BOOK = id_BOOK;
    }

    public String getTITLE() {
        return TITLE;
    }

    public void setTITLE(String TITLE) {
        this.TITLE = TITLE;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public float getPRICE() {
        return PRICE;
    }

    public void setPRICE(float PRICE) {
        this.PRICE = PRICE;
    }

    public int getQUANTITY() {
        return QUANTITY;
    }

    public void setQUANTITY(int QUANTITY) {
        this.QUANTITY = QUANTITY;
    }

    public String getDESCRIPTION() {
        return DESCRIPTION;
    }

    public void setDESCRIPTION(String DESCRIPTION) {
        this.DESCRIPTION = DESCRIPTION;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }
    public Author getAuthor() {
        return author;
    }
}