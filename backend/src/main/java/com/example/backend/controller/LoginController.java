package com.example.backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class LoginController {
    
    @Autowired
    private UserRepository userRepository;
    private static User currentUser;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> loginData) {
        User user = userRepository.findByEmail(loginData.get("email"));

        if (user != null && user.getPassword().equals(loginData.get("password"))) {
            System.out.println(user.getFirstName() + " " + user.getLastName());
            currentUser = user;
            return ResponseEntity.ok("Login Successful");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
    }

    static void setCurrentUser(User u) {
        currentUser = u;
    }

    static User getCurrentUser() {
        return currentUser;
    }
}
