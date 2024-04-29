package com.example.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.User;

@RestController
@RequestMapping("/api")
class Session {
    private static User currentUser;

    static void setCurrentUser(User u) {
        currentUser = u;
    }

    static User getCurrentUser() {

        return currentUser;
    }
}
