package com.example.backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Post;
import com.example.backend.entity.User;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;

@RestController
@RequestMapping("/api")
class Session {
    private static User currentUser;

    @Autowired
    private PostRepository postRepository;
    private UserRepository userRepository;

    static void setCurrentUser(User u) {
        currentUser = u;
    }

    static User getCurrentUser() {
        return currentUser;
    }
}
