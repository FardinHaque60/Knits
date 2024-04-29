package com.example.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.entity.Car;
import com.example.backend.entity.Hangout;

import java.util.List;


public interface CarRepository extends CrudRepository<Car, Integer> {
    List<Car> findByHangout(Hangout hangout);
}
