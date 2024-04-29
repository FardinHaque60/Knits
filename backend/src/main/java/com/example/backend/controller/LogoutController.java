package com.example.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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
