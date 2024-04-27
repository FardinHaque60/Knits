package com.example.backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class LogoutController {

    @GetMapping("/logout")
    public ResponseEntity<String> login() {
        if (Session.getCurrentUser() == null) {
            return ResponseEntity.badRequest().body("no user logged in");
        }
        Session.setCurrentUser(null);
        return ResponseEntity.ok().body("user logged out");
    }
}
