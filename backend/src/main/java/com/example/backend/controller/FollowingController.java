package com.example.backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Following;
import com.example.backend.entity.User;
import com.example.backend.repository.FollowingRepository;
import com.example.backend.repository.UserRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api")
public class FollowingController {
    
    @Autowired
    private FollowingRepository followingRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/following")
    public ResponseEntity<Map<String,String>> postMethodName(@RequestParam Integer id) throws NullPointerException{
        User currentUser = Session.getCurrentUser();
        User followingUser = userRepository.findById(id).orElse(null);
        if (currentUser == null || followingUser == null)
            throw new NullPointerException();
        Following relationship = new Following(currentUser, followingUser);
        followingRepository.save(relationship);
        Map<String, String> followingObj = new HashMap<>();
        followingObj.put("status", "true");
        followingObj.put("date", relationship.getDate());
        
        return ResponseEntity.ok().body(followingObj);
    }

    @GetMapping("/unfollow")
    public ResponseEntity<Map<String, String>> getMethodName(@RequestParam Integer id) throws NullPointerException {
        User currentUser = Session.getCurrentUser();
        User followingUser = userRepository.findById(id).orElse(null);
        if (currentUser == null || followingUser == null)
            throw new NullPointerException();
        Following relationship = followingRepository.findByUserAndFollowing(currentUser, followingUser);
        followingRepository.delete(relationship);

        Map<String, String> followObj = new HashMap<>();
        followObj.put("status", "false");
        followObj.put("date", "");

        return ResponseEntity.ok().body(followObj);
    }
    
    @GetMapping("/get-following-list")
    public ResponseEntity<List<Map<String, String>>> getFollowing(@RequestParam Integer id) {
        User user = userRepository.findById(id).orElse(null);
        List<Following> following = followingRepository.findByUser(user);
        List<Map<String, String>> usersResult = new ArrayList<>();

        Map<String, String> userObj;
        User u;
        for (Following f: following) {
            u = f.getFollowing();
            userObj = new HashMap<>();
            userObj.put("id", "" + u.getId());
            userObj.put("profilePicture", u.getProfilePicture());
            if (u.getId().equals(Session.getCurrentUser().getId())) {
                userObj.put("firstName", "You");
                userObj.put("lastName", "");
            }
            else {
                userObj.put("firstName", u.getFirstName());
                userObj.put("lastName", u.getLastName());
            }
            usersResult.add(userObj);
        }

        return ResponseEntity.ok().body(usersResult);
    }

    @GetMapping("/get-follower-list")
    public ResponseEntity<List<Map<String, String>>> getFollowers(@RequestParam Integer id) {
        User user = userRepository.findById(id).orElse(null);
        List<Following> followers = followingRepository.findByFollowing(user);
        List<Map<String, String>> usersResult = new ArrayList<>();

        Map<String, String> userObj;
        User u;
        for (Following f: followers) {
            u = f.getUser();
            userObj = new HashMap<>();
            userObj.put("id", "" + u.getId());
            userObj.put("profilePicture", u.getProfilePicture());
            if (u.getId().equals(Session.getCurrentUser().getId())) {
                userObj.put("firstName", "You");
                userObj.put("lastName", "");
            }
            else {
                userObj.put("firstName", u.getFirstName());
                userObj.put("lastName", u.getLastName());
            }
            usersResult.add(userObj);
        }

        return ResponseEntity.ok().body(usersResult);
    }
}