package com.example.backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Car;
import com.example.backend.entity.CarPeople;
import com.example.backend.entity.Following;
import com.example.backend.entity.Hangout;
import com.example.backend.entity.User;
import com.example.backend.repository.CarPeopleRepository;
import com.example.backend.repository.CarRepository;
import com.example.backend.repository.FollowingRepository;
import com.example.backend.repository.HangoutRepository;
import com.example.backend.repository.UserRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/api")
public class HangoutController {
    
    @Autowired
    private HangoutRepository hangoutRepository;
    @Autowired
    private FollowingRepository followingRepository;
    @Autowired
    private CarRepository carRepository;
    @Autowired
    private CarPeopleRepository carPeopleRepository;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create-hangout")
    public ResponseEntity<String> createHangout(@RequestBody Map<String, String> data) throws Exception {
        try {
            Hangout hangout = new Hangout(Session.getCurrentUser(), data.get("description"), data.get("date"), data.get("time"));
            hangoutRepository.save(hangout);
        }
        catch (Exception e) {
            throw new Exception(e);
        }
        return ResponseEntity.ok().body("Hangout Created");
    }

    @GetMapping("/get-join-hangouts")
    public ResponseEntity<List<Map<String, String>>> getJoinHangouts() {
        List<Map<String, String>> joinHangouts = new ArrayList<>();
        List<Following> following = followingRepository.findByUser(Session.getCurrentUser());
        List<Hangout> join = new ArrayList<>(); User host;
        for (Following f: following) {
            host = f.getFollowing();
            join.addAll(hangoutRepository.findAllByHost(host));
        }

        Map<String, String> hangoutObj; User curr;
        for (Hangout h: join) {
            curr = h.getHost();
            hangoutObj = new HashMap<>();
            hangoutObj.put("id", h.getId().toString());
            hangoutObj.put("host", curr.getFirstName() + " " + curr.getLastName());
            hangoutObj.put("description", h.getDescription());
            hangoutObj.put("picture", curr.getProfilePicture());
            hangoutObj.put("date", h.getDate());
            hangoutObj.put("time", h.getTime());
            joinHangouts.add(hangoutObj);
        }

        return ResponseEntity.ok().body(joinHangouts);
    }
    
    @GetMapping("/get-host-hangouts")
    public ResponseEntity<List<Map<String, String>>> getHostHangouts() {
        List<Map<String, String>> hostHangouts = new ArrayList<>();
        List<Hangout> hosted = hangoutRepository.findAllByHost(Session.getCurrentUser());

        System.out.println("entered");
        Map<String, String> hangoutObj; User curr;
        for (Hangout h: hosted) {
            System.out.println(h.getDescription());
            curr = h.getHost();
            hangoutObj = new HashMap<>();
            hangoutObj.put("id", h.getId().toString());
            hangoutObj.put("host", "You");
            hangoutObj.put("description", h.getDescription());
            hangoutObj.put("picture", curr.getProfilePicture());
            hangoutObj.put("date", h.getDate());
            hangoutObj.put("time", h.getTime());
            hostHangouts.add(hangoutObj);
        }

        return ResponseEntity.ok().body(hostHangouts);
    }

    @GetMapping("/get-hangout-info")
    public ResponseEntity<Map<String, String>> getHangoutInfo(@RequestParam Integer id) {
        Map<String, String> hangoutObj = new HashMap<>();
        Hangout h = hangoutRepository.findById(id).orElse(null);
        User curr = h.getHost();
        String hostName = curr.getFirstName() + " " + curr.getLastName();
        hangoutObj.put("id", h.getId().toString()); 
        if (userRepository.findById(Session.getCurrentUser().getId()).orElse(null).equals(curr)) {
            hostName = "You";
        }
        hangoutObj.put("host", hostName);
        hangoutObj.put("description", h.getDescription());
        hangoutObj.put("picture", curr.getProfilePicture());
        hangoutObj.put("date", h.getDate());
        hangoutObj.put("time", h.getTime());

        return ResponseEntity.ok().body(hangoutObj);
    }

    @GetMapping("/get-hangout-cars")
    public ResponseEntity<List<Map<String, String>>> getHangoutCars(@RequestParam Integer id) {
        List<Map<String, String>> carObjs = new ArrayList<>();
        List<Car> cars = carRepository.findByHangout(hangoutRepository.findById(id).orElse(null));
        User curr = userRepository.findById(Session.getCurrentUser().getId()).orElse(null);
        Map<String, String> carObj;
        User driver; String name;
        for (Car c: cars) {
            driver = c.getDriver();
            if (driver.equals(curr))
                name = "You";
            else 
                name = driver.getFirstName() + " " + driver.getLastName();
            carObj = new HashMap<>();
            carObj.put("id", c.getId().toString());
            carObj.put("driverPicture", driver.getProfilePicture());
            carObj.put("driver", name);
            carObj.put("date", c.getDepartDate());
            carObj.put("time", c.getDepartTime());
            carObj.put("capacity", c.getCapacity().toString());
            carObjs.add(carObj);
        }

        return ResponseEntity.ok().body(carObjs);
    }

    @GetMapping("/get-hangout-join-status")
    public ResponseEntity<Map<String, String>> getHangoutJoinStatus(@RequestParam Integer id) { //expect hangout id
        Map<String, String> joinStatus = new HashMap<>();

        joinStatus.put("status", "false");
        List<Car> carsInHangout = carRepository.findByHangout(hangoutRepository.findById(id).orElse(null));
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

    @GetMapping("/delete-hangout")
    public ResponseEntity<String> deleteHangout(@RequestParam Integer id) {
        Hangout hangout = hangoutRepository.findById(id).orElse(null);
        hangoutRepository.delete(hangout);

        return ResponseEntity.ok().body("Hangout Deleted");
    }
    
    @GetMapping("/leave-hangout")
    public ResponseEntity<String> leaveHangout(@RequestParam Integer id) {
        //get the hangout im in through Hangout
        Hangout hangout = hangoutRepository.findById(id).orElse(null);

        //get all the cars in this hangout Car
        List<Car> cars = carRepository.findByHangout(hangout);
        User me = userRepository.findById(Session.getCurrentUser().getId()).orElse(null);
        //find which car i am in through CarPeople
        List<CarPeople> passengers;
        outerloop:
        for (Car c: cars) {
            passengers = carPeopleRepository.findAllByCar(c); //passengers in car
            for (CarPeople p: passengers) {
                if (me.equals(p.getUser())) { //found match with passengers
                    carPeopleRepository.delete(p); //delete user as passenger
                    c.setCapacity(c.getCapacity()+1); 
                    carRepository.save(c);
                    if (c.getDriver().equals(me)) { //if user is driver of car
                        carRepository.delete(c); 
                    }
                    break outerloop;
                }
            }
        }

        return ResponseEntity.ok().body("left hangout");
    }
    
}
