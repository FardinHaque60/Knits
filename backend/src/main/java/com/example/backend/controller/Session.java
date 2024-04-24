package com.example.backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Post;
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

    @GetMapping("/get-user-info")
    public ResponseEntity<Map<String, String>> getUserInfo() throws NullPointerException {
        Map<String, String> userInfo = new HashMap<>();
        if (currentUser == null) {
            throw new NullPointerException();
        }
        System.out.println("Current User: " + currentUser);
        //userInfo.put("profilePicture", currentUser.getProfilePicture())
        userInfo.put("firstName", currentUser.getFirstName());
        userInfo.put("lastName", currentUser.getLastName());
        userInfo.put("email", currentUser.getEmail());

        return ResponseEntity.ok().body(userInfo);
    }

    //TODO: create method for getting posts in users feed
    @GetMapping("/get-feed-posts")
    public ResponseEntity<List<Post>> getFeedPosts() {
        List<Post> feedPosts = new ArrayList<>();

        return ResponseEntity.ok().body(feedPosts);
    }

    //TODO: create method for getting posts that user created
    @GetMapping("/get-user-posts")
    public ResponseEntity<List<Post>> getUserPosts() {
        List<Post> userPosts = new ArrayList<>();

        return ResponseEntity.ok().body(userPosts);
    }
}
