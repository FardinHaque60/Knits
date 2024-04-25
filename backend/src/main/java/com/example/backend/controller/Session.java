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
import com.example.backend.repository.PostRepository;

@RestController
@RequestMapping("/api")
class Session {
    private static User currentUser;

    private PostRepository postRepository;

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

    @GetMapping("/get-user-posts")
    public ResponseEntity<List<Map<String, String>>> getPosts() throws Exception {
        List<Map<String, String>> postObjs = new ArrayList<>();

        try {
            List<Post> myPosts = postRepository.findByAuthor(currentUser);
            Map<String, String> postObj;
            for (Post p: myPosts) {
                postObj = new HashMap<>();
                postObj.put("author", currentUser.getFirstName() + " " + currentUser.getLastName());
                postObj.put("body", p.getBody());
                postObj.put("date", p.getDate());
                postObj.put("time", p.getTime());
            }
        }
        catch (Exception e) {
            throw new Exception(e.toString());
        }

        return ResponseEntity.ok().body(postObjs);
    }
}
