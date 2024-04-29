package com.example.backend.entity;


import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Hangout {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "host_id")
    private User host;

    @OneToMany(mappedBy = "hangout", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<Car> cars;

    private String description;
    private String date;
    private String time;

    public Hangout() {}

    public Hangout(User h, String desc, String d, String t) {
        host = h; description = desc; 
        date = d; time = t;
    }

    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }

    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public User getHost() {
        return host;
    }
    public void setHost(User host) {
        this.host = host;
    }
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
}
