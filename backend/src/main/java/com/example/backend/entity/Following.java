package com.example.backend.entity;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Following {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id") //user id, can derive followed_by through querying following_id
    private User user;

    @ManyToOne
    @JoinColumn(name = "following_id") //who user_id is following
    private User following;

    private String date;

    public Following() {}

    public Following(User u, User f) {
        user = u; following = f;
        LocalDate currentDate = LocalDate.now();  
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String formattedDate = currentDate.format(dateFormatter);
        date = formattedDate;
    }

    public User getFollowing() {
        return following;
    }

    public void setFollowing(User following) {
        this.following = following;
    }
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
