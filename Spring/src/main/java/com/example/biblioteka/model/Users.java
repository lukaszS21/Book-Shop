package com.example.biblioteka.model;

import com.example.biblioteka.enums.UserRoles;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Date;

@Entity
@Table(name="Users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    @Column(unique = true)
    private String email;
    @NotEmpty
    private String salt;
    @NotEmpty
    @Column(name = "password")
    private String password;
    @NotNull
    private Boolean logged;

    @NotNull
    private String role;

    @NotNull
    @Column(name = "created_at")
    private Date createdAt;
    @OneToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private UserDetails userDetails;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    private Basket basket;
    public Users(){


    }

    public Users(String email, String password, UserDetails userDetails,Basket basket) {

        this.email = email;
        this.password = password;
        this.userDetails = userDetails;
        this.basket = basket;

    }
    @PrePersist
    public void setUser() {
        this.createdAt = new Date(System.currentTimeMillis());
        this.logged = false;
    }

    public Basket getBasket() {
        return basket;
    }

    public void setBasket(Basket basket) {
        this.basket = basket;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getLogged() {
        return logged;
    }

    public void setLogged(Boolean logged) {
        this.logged = logged;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public UserDetails getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(UserDetails userDetails) {
        this.userDetails = userDetails;
    }
}