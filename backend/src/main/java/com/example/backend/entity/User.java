package com.example.backend.entity;

import java.util.List;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity // This tells Hibernate to make a table out of this class
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Column(nullable = false)
  private Integer id;

  private String profilePicture;
  private String firstName;
  private String lastName;
  private String email;
  private String password;
  private String biography;

  @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<Following> user;

  @OneToMany(mappedBy = "following", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<Following> followers;

  @OneToMany(mappedBy = "host", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<Hangout> hosts;

  @OneToMany(mappedBy = "author", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<Post> authors;

  @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<CarPeople> carPeople;

  @OneToMany(mappedBy = "driver", cascade = CascadeType.REMOVE, orphanRemoval = true)
  private List<Car> drivers;

  public User() {}

  public User(String f, String l, String e, String p) {
    firstName = f; lastName = l;
    email = e; password = p;
    profilePicture = "Default";
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getBiography() {
    return biography;
  }

  public void setBiography(String biography) {
    this.biography = biography;
  }

  public String getProfilePicture() {
    return profilePicture;
  }

  public void setProfilePicture(String profilePicture) {
    this.profilePicture = profilePicture;
  }

  @Override
  public String toString() {
    return firstName + " " + lastName + " - " + email;
  }
}
