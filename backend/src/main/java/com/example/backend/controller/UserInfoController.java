package com.example.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Post;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.entity.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api")
public class UserInfoController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PostRepository postRepository;
    
    @GetMapping("/get-user-info")
    public ResponseEntity<Map<String, String>> getUserInfo(@RequestParam Integer id) throws NullPointerException {
        Map<String, String> userInfo = new HashMap<>();
        User currentUser;
        if (id != -1)
            currentUser = userRepository.findById(id).orElse(null);
        else
            currentUser = Session.getCurrentUser();
        if (currentUser == null) {
            throw new NullPointerException();
        }
        System.out.println("Current User: " + currentUser);
        userInfo.put("firstName", currentUser.getFirstName());
        userInfo.put("lastName", currentUser.getLastName());
        userInfo.put("email", currentUser.getEmail());
        userInfo.put("bio", currentUser.getBiography());
        userInfo.put("profilePicture", currentUser.getProfilePicture());

        return ResponseEntity.ok().body(userInfo);
    }
    
    @GetMapping("/get-user-posts")
    public ResponseEntity<List<Map<String, String>>> getPosts(@RequestParam Integer id) throws Exception {
        User currentUser;
        if (id != -1)
            currentUser = userRepository.findById(id).orElse(null);
        else
            currentUser = Session.getCurrentUser();
        List<Map<String, String>> postObjs = new ArrayList<>();

        try {
            List<Post> myPosts = postRepository.findByAuthor(currentUser);
            System.out.println("looking for: " + currentUser.getFirstName() + " posts");
            Map<String, String> postObj;
            for (Post p: myPosts) {
                System.out.println("found: " + p.getBody());
                postObj = new HashMap<>();
                postObj.put("id", "" + p.getId());
                postObj.put("author", currentUser.getFirstName() + " " + currentUser.getLastName());
                postObj.put("body", p.getBody());
                postObj.put("date", p.getDate());
                postObj.put("time", p.getTime());
                postObjs.add(postObj);
            }
        }
        catch (Exception e) {
            throw new Exception(e.toString());
        }

        return ResponseEntity.ok().body(postObjs);
    }

    @PostMapping("/edit-user-info")
    public ResponseEntity<String> editUserInfo(@RequestBody Map<String, String> userInfo) {
        User currentUser = Session.getCurrentUser();
        currentUser.setFirstName(userInfo.get("firstName"));
        currentUser.setLastName(userInfo.get("lastName"));
        currentUser.setBiography(userInfo.get("bio"));
        userRepository.save(currentUser);
        
        return ResponseEntity.ok().body("Succesfully Edited User");
    }

    @GetMapping("/get-user-stats")
    public ResponseEntity<Map<String, Integer>> getMethodName(@RequestParam Integer id) {
        Map<String, Integer> userStats = new HashMap<>();

        return ResponseEntity.ok().body(userStats);
    }
}
