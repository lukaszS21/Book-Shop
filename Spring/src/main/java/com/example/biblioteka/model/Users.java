package com.example.biblioteka.model;

import com.example.biblioteka.enums.UserRoles;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;
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
    @Enumerated(EnumType.STRING)
    private UserRoles role;

    @NotNull
    @Column(name = "created_at")
    private Date createdAt;
    @OneToOne(cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private UserDetails userDetails;
    public Users(){


    }

    public Users(String email, String password, UserDetails userDetails,String salt) {

        this.email = email;
        this.password = password;
        this.userDetails = userDetails;
        this.salt=salt;
    }
    @PrePersist
    public void setUser() {
        this.createdAt = new Date(System.currentTimeMillis());
        this.logged = false;
        this.role = UserRoles.ROLE_USER;
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

    public UserRoles getRole() {
        return role;
    }

    public void setRole(UserRoles role) {
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