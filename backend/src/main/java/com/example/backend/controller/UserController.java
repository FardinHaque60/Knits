package com.example.backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.repository.UserRepository;
import com.example.backend.entity.User;

// --------- rest api set up for React Native fetch ------ 
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public @ResponseBody List<User> getAllUsers() {
      Iterable<User> temp = userRepository.findAll();
      List<User> userList = new ArrayList<>();
      for (User u: temp) {
        userList.add(u);
      }
      return userList;
    }
}
