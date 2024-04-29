package com.example.backend.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Post;
import com.example.backend.entity.User;
import com.example.backend.repository.PostRepository;


@RestController
@RequestMapping("/api")
public class PostController {
    
    @Autowired
    private PostRepository postRepository;

    @PostMapping("/create-post")
    public ResponseEntity<String> createPost(@RequestBody String postData) {
        User author = Session.getCurrentUser();
        if (author == null) {
            return ResponseEntity.badRequest().body("user not logged in");
        }
        LocalDate currentDate = LocalDate.now();    
        LocalTime currentTime = LocalTime.now();
        
        // Format the date and time
        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
        String formattedDate = currentDate.format(dateFormatter);
        String formattedTime = currentTime.format(timeFormatter);

        Post post = new Post(author, postData, formattedDate, formattedTime);
        try {
            postRepository.save(post);
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create post: " + e.toString());
        }
        return ResponseEntity.ok().body("Created Post");
    }
}
