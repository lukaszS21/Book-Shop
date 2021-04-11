package com.example.biblioteka.model;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="book")
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_BOOK;

    @NotEmpty
    @Column
    private String TITLE;

    @NotEmpty
    @Column
    private String category;


    @NotEmpty
    @Column
    private float PRICE;


    @NotEmpty
    @Column
    private int QUANTITY;

    @NotEmpty
    @Column
    private String DESCRIPTION;
    public Books() {
    }
    public Books(String TITLE,  String DESCRIPTION,float PRICE,int QUANTITY,String category,long id_BOOK) {
        this.TITLE= TITLE;
        this.DESCRIPTION = DESCRIPTION;
        this.PRICE = PRICE;
        this.QUANTITY = QUANTITY;
        this.category = category;
        this.id_BOOK = id_BOOK;
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

    public String getCategory() {
        return category;
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
}