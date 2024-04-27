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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
public class SearchController {
    
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/search-users")
    public ResponseEntity<List<Map<String, String>>> searchUsers(@RequestParam String searchQuery) {
        Iterable<User> allUsers = userRepository.findAll();
        List<Map<String, String>> usersResult = new ArrayList<>();

        String fullName;
        Map<String, String> userObj;
        for (User u: allUsers) {
            fullName = u.getFirstName() + " " + u.getLastName();
            if (u.getId() != Session.getCurrentUser().getId() && fullName.indexOf(searchQuery) != -1) {
                userObj = new HashMap<>();
                userObj.put("id", "" + u.getId());
                userObj.put("profilePicture", u.getProfilePicture());
                userObj.put("firstName", u.getFirstName());
                userObj.put("lastName", u.getLastName());
                usersResult.add(userObj);
            }
        }

        return ResponseEntity.ok().body(usersResult);
    }
    

}
