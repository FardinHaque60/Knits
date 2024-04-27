package com.example.backend.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Post {
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User author; //foreign key to user who created post

    private String body;
    private String date;
    private String time;

    public Post() {}

    public Post(User u, String b, String d, String t) {
        author = u; body = b; date = d; time = t;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

     public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
    
    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }
    
    public void setTime(String time) {
        this.time = time;
    }
}
