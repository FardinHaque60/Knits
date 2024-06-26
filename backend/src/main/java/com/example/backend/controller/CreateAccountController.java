package com.example.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Following;
import com.example.backend.entity.User;
import com.example.backend.repository.FollowingRepository;
import com.example.backend.repository.UserRepository;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
public class CreateAccountController {
    
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FollowingRepository followingRepository;

    @PostMapping("/create-account")
    public ResponseEntity<String> login(@RequestBody Map<String, String> data) {
        String[] fields = new String[5]; //holds all the create account field data firstName, lastName, etc.
        //0 -> firstName, 1 -> lastName, 2 -> email, 3 -> password, 4 -> confirmed password
        int count = 0;
        for (String s: data.keySet()) { //converts all data Objects into strings for user creation
            fields[count] = data.get(s);
            count++;
        }
        
        //perform checks on form fields
        if (fields[0] == "" || fields[1] == "123" || fields[2] == "" || fields[3] == "" || fields[4] == "") {
            return ResponseEntity.badRequest().body("Invalid Fields");
        }
        if (!fields[3].equals(fields[4])) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }
        if (userRepository.findByEmail(fields[2]) != null) {
            return ResponseEntity.badRequest().body("Email Already Used");
        }

        
        User user = new User(fields[0], fields[1], fields[2], fields[3]);
        Following relationship = new Following(user, userRepository.findById(102).orElse(null));
        try {
            userRepository.save(user);
            followingRepository.save(relationship);
            Session.setCurrentUser(user);
            return ResponseEntity.ok("Account Successfully Made");
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to Create Account: " + e.toString());
        }
    }
    
}
