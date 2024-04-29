package com.example.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.entity.CarPeople;
import java.util.List;

import com.example.backend.entity.Car;


public interface CarPeopleRepository extends CrudRepository<CarPeople, Integer> {
    List<CarPeople> findAllByCar(Car car);
}
