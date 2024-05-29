package com.example.first_app.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nom;
    private Integer age;
    @Column(name = "dateDeNaissance")
    private String dateDeNaissance;
    private String email;
    private String genre;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return String return the nom
     */
    public String getNom() {
        return nom;
    }

    /**
     * @param nom the nom to set
     */
    public void setNom(String nom) {
        this.nom = nom;
    }

    /**
     * @return Integer return the age
     */
    public Integer getAge() {
        return age;
    }

    /**
     * @param age the age to set
     */
    public void setAge(Integer age) {
        this.age = age;
    }

    /**
     * @return String return the dateDeNaissance
     */
    public String getDateDeNaissance() {
        return dateDeNaissance;
    }

    /**
     * @param dateDeNaissance the dateDeNaissance to set
     */
    public void setDateDeNaissance(String dateDeNaissance) {
        this.dateDeNaissance = dateDeNaissance;
    }

    /**
     * @return String return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return String return the genre
     */
    public String getGenre() {
        return genre;
    }

    /**
     * @param genre the genre to set
     */
    public void setGenre(String genre) {
        this.genre = genre;
    }

}
