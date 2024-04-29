package com.example.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Car;
import com.example.backend.entity.CarPeople;
import com.example.backend.entity.Hangout;
import com.example.backend.entity.User;
import com.example.backend.repository.CarPeopleRepository;
import com.example.backend.repository.CarRepository;
import com.example.backend.repository.HangoutRepository;
import com.example.backend.repository.UserRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
public class CarController {
    
    @Autowired
    private HangoutRepository hangoutRepository;
    @Autowired
    private CarRepository carRepository;
    @Autowired
    private CarPeopleRepository carPeopleRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create-car")
    public ResponseEntity<String> createCar(@RequestBody Map<String, String> carData) throws Exception {
        try {
            Hangout hangout = hangoutRepository.findById(Integer.parseInt(carData.get("hangoutID"))).orElse(null);
            Car c = new Car(Session.getCurrentUser(), hangout, carData.get("departDate"), carData.get("departTime"), Integer.parseInt(carData.get("capacity"))-1);
            carRepository.save(c);
            CarPeople driver = new CarPeople(Session.getCurrentUser(), c);
            carPeopleRepository.save(driver);
        }
        catch (Exception e) {
            throw new Exception(e);
        }
        return ResponseEntity.ok().body("Added car");
    }

    @GetMapping("get-passengers-list")
    public ResponseEntity<List<Map<String, String>>> getPassengers(@RequestParam Integer id) { //returns all the passengers in a car, given car id
        List<Map<String, String>> passengers = new ArrayList<>();
        Car car = carRepository.findById(id).orElse(null);
        List<CarPeople> allRiders = carPeopleRepository.findAllByCar(car);
        User rider; Map<String, String> passengerObj; String firstName; String lastName;
        for (CarPeople r: allRiders) {
            rider = r.getUser();
            passengerObj = new HashMap<>();
            firstName = rider.getFirstName(); lastName = rider.getLastName();
            //check to see if rider is myself, then set name to You
            if (rider.equals(userRepository.findById(Session.getCurrentUser().getId()).orElse(null))) {
                firstName = "You"; lastName = "";
            }
            //check if rider is the driver
            if (rider.equals(car.getDriver())) {
                firstName = "Driver: " + firstName;
            }
            passengerObj.put("firstName", firstName);
            passengerObj.put("lastName", lastName);
            passengerObj.put("id", rider.getId().toString());
            passengerObj.put("profilePicture", rider.getProfilePicture());
            passengers.add(passengerObj);
        }

        return ResponseEntity.ok().body(passengers);
    }

    @GetMapping("/join-car")
    public ResponseEntity<String> joinCar(@RequestParam Integer id) { //expect car id to join
        
        Car car = carRepository.findById(id).orElse(null);
        CarPeople rider = new CarPeople(Session.getCurrentUser(), car);
        carPeopleRepository.save(rider);
        car.setCapacity(car.getCapacity()-1);
        carRepository.save(car);    
    
        return ResponseEntity.ok().body("Joined car");
    }

    @GetMapping("/get-car-join-status")
    public ResponseEntity<Map<String, String>> getCarJoinStatus(@RequestParam Integer id) { //expect car id
        Car car = carRepository.findById(id).orElse(null);
        Integer hangoutId = car.getHangout().getId();
        Map<String, String> joinStatus = new HashMap<>();
        joinStatus.put("capacity", "false");
        if (car.getCapacity() <= 0) {
            joinStatus.put("capacity", "true");
        }

        joinStatus.put("status", "false");
        List<Car> carsInHangout = carRepository.findByHangout(hangoutRepository.findById(hangoutId).orElse(null));
        User curr = userRepository.findById(Session.getCurrentUser().getId()).orElse(null);
        String carDriver;
        for (Car c: carsInHangout) {
            for (CarPeople p: carPeopleRepository.findAllByCar(c)) {
                if (curr.equals(p.getUser())) {
                    joinStatus.put("status", "true");
                    joinStatus.put("date", p.getDate());
                    joinStatus.put("time", p.getTime());
                    if (p.getCar().getDriver().equals(curr)) {
                        carDriver = "You are a driver";
                    } 
                    else {
                        carDriver = "You are in " + p.getCar().getDriver().getFirstName() + "\'s car";
                    }
                    joinStatus.put("car", carDriver);
                    return ResponseEntity.ok().body(joinStatus);
                }
            }
        }

        return ResponseEntity.ok().body(joinStatus);
    }
}