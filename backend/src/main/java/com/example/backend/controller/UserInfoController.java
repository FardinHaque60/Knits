package com.example.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Following;
import com.example.backend.entity.Post;
import com.example.backend.repository.FollowingRepository;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.entity.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.catalina.connector.Response;
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
    @Autowired
    private FollowingRepository followingRepository;
    
    @GetMapping("/get-user-info")
    public ResponseEntity<Map<String, String>> getUserInfo(@RequestParam Integer id) throws NullPointerException {
        Map<String, String> userInfo = new HashMap<>();
        User currentUser;
        if (id.equals(Session.getCurrentUser().getId())) {;
            userInfo.put("status", "invalid");
            return ResponseEntity.ok().body(userInfo);
        }
        else if (id != -1) {
            currentUser = userRepository.findById(id).orElse(null);
        }
        else {
            currentUser = Session.getCurrentUser();
        }
        if (currentUser == null) {
            throw new NullPointerException();
        }
        System.out.println("Current User: " + currentUser);
        userInfo.put("id", currentUser.getId().toString());
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

    @GetMapping("get-feed-posts")
    public ResponseEntity<List<Map<String, String>>> getFeedPosts() {
        List<Map<String, String>> feedPosts = new ArrayList<>();
        List<Following> followeeObjs = followingRepository.findByUser(Session.getCurrentUser());
        List<User> followees = new ArrayList<>();
        for (Following f: followeeObjs) {
            followees.add(f.getFollowing());
        }
        List<Post> posts = postRepository.findAllByAuthor(followees);
        Map<String, String> postObj; User auth;
        for (Post p: posts) {
            auth = p.getAuthor();
            postObj = new HashMap<>();
            postObj.put("id", p.getId().toString());
            postObj.put("author", auth.getFirstName() + " " + auth.getLastName());
            postObj.put("body", p.getBody());
            postObj.put("date", p.getDate());
            postObj.put("time", p.getTime());
            feedPosts.add(postObj);
        }

        return ResponseEntity.ok().body(feedPosts);
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
    public ResponseEntity<Map<String, Integer>> getUserStatus(@RequestParam Integer id) throws NullPointerException{
        Map<String, Integer> userStats = new HashMap<>();
        User user;
        if (id != -1) 
            user = userRepository.findById(id).orElse(null);
        else   
            user = Session.getCurrentUser();
        if (user == null)
            throw new NullPointerException();

        userStats.put("posts", postRepository.findByAuthor(user).size());
        userStats.put("following", followingRepository.findByUser(user).size());
        userStats.put("followers", followingRepository.findByFollowing(user).size());

        return ResponseEntity.ok().body(userStats);
    }

    @GetMapping("/get-following-status")
    public ResponseEntity<Map<String, String>> getFollowingStatus(@RequestParam Integer id) { //expect user id to check if we are following them or not
        Map<String, String> followingObj = new HashMap<>();
        followingObj.put("date", "");
        followingObj.put("status", "false");
        Following followingCheck = followingRepository.findByUserAndFollowing(Session.getCurrentUser(), userRepository.findById(id).orElse(null));
        if (followingCheck != null) {
            followingObj.put("status", "true");
            followingObj.put("date", followingCheck.getDate());
        }

        return ResponseEntity.ok().body(followingObj);
    }
}
