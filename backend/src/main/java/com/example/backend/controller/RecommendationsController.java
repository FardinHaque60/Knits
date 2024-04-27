package com.example.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api")
public class RecommendationsController {

    @Autowired
    private UserRepository userRepository;

    /**
     * @param userid_that_wants_recommendations
     */
    @GetMapping("/get-recommendations")
    public ResponseEntity<List<Map<String, String>>> getMethodName() {
        List<Map<String, String>> allUsers = new ArrayList<>();
        Integer currentUserId = Session.getCurrentUser().getId();
        
        Map<String, String> userObj;
        Iterable<User> users = userRepository.findAll();
        for (User u: users) {
            if (u.getId().equals(currentUserId))
                continue;
            userObj = new HashMap<>();
            userObj.put("id", u.getId() + "");
            userObj.put("profilePicture", u.getProfilePicture());
            userObj.put("firstName", u.getFirstName());
            userObj.put("lastName", u.getLastName());
            userObj.put("email", u.getEmail());
            allUsers.add(userObj);
        }

        return ResponseEntity.ok().body(allUsers);
    }
}
