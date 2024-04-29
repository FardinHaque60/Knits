package com.example.backend.entity;


import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private User driver;

    @ManyToOne
    @JoinColumn(name = "hangout_id")
    private Hangout hangout;

    @OneToMany(mappedBy = "car", cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<CarPeople> carPeople;

    private String departDate;
    private String departTime;
    private Integer capacity;

    public Car() {}

    public Car(User d,Hangout h, String dD, String dT, Integer c) {
        driver = d; hangout = h;
        departDate = dD; departTime = dT;
        capacity = c;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public String getDepartTime() {
        return departTime;
    }

    public void setDepartTime(String departTime) {
        this.departTime = departTime;
    }

    public String getDepartDate() {
        return departDate;
    }

    public void setDepartDate(String departDate) {
        this.departDate = departDate;
    }

    public Hangout getHangout() {
        return hangout;
    }

    public void setHangout(Hangout hangout) {
        this.hangout = hangout;
    }

    public User getDriver() {
        return driver;
    }

    public void setDriver(User driver) {
        this.driver = driver;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
