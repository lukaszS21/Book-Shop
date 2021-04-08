package com.example.biblioteka.model;

public class Books {


    private String title;
    private String author;
    private String publishing;//publishinghouse
    private String description;
    private float price;
    private String photo;
    private String category;
    private String type;
    private Long id;
    public Books(String title, String author, String publishing,String description,float price,String photo,String category,String type,long id) {
        this.title = title;
        this.author = author;
        this.publishing = publishing;
        this.description = description;
        this.price = price;
        this.photo = photo;
        this.category = category;
        this.type = type;
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPublishing(String publishing) {
        this.publishing = publishing;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getPublishing() {
        return publishing;
    }

    public String getDescription() {
        return description;
    }

    public float getPrice() {
        return price;
    }

    public String getPhoto() {
        return photo;
    }

    public String getCategory() {
        return category;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



}