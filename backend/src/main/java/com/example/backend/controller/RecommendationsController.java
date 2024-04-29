package com.example.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.User;
import com.example.backend.repository.FollowingRepository;
import com.example.backend.repository.UserRepository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api")
public class RecommendationsController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private FollowingRepository followingRepository;

    /**
     * @param userid_that_wants_recommendations
     */
    @GetMapping("/get-recommendations")
    public ResponseEntity<List<Map<String, String>>> getReccommendations() {
        Graph graphObj = new Graph();
        Set<Node> g = graphObj.makeGraph(followingRepository.findAll(), userRepository.findAll());
        System.out.println("---------------------All Users---------------------");
        for (Node n: g) {
            System.out.println(n.getUser().getFirstName());
        }
        Integer currUserId = Session.getCurrentUser().getId();
        User currUser = userRepository.findById(currUserId).orElse(null);
        Node startNode = Graph.findNode(g, currUser);
        Queue<Node> BFS = new LinkedList<>();
        BFS.add(startNode);
        startNode.setDiscovery(true);
        Node curr; 
        Set<Node> recommend = new HashSet<>();
        while (!BFS.isEmpty()) {
            curr = BFS.poll();
            for (Node n: curr.getFollowing()) {
                if (!n.getDiscovery()) {
                    BFS.add(n);
                    n.setDiscovery(true);
                    n.setParent(curr);
                }
            }
            if (curr.getParent() != null && curr.getParent() != startNode) {
                recommend.add(curr);
            }
        }
        List<Map<String, String>> allReccomendations = new ArrayList<>();
        Map<String, String> reccObj; User u;
        System.out.println("---------------------recommendations---------------------");
        for (Node n: recommend) {
            System.out.println(n.getUser().getFirstName() + " " + n.getUser().getLastName());
            reccObj = new HashMap<>();
            u = n.getUser();
            reccObj.put("id", u.getId() + "");
            reccObj.put("profilePicture", u.getProfilePicture());
            reccObj.put("firstName", u.getFirstName());
            reccObj.put("lastName", u.getLastName());
            reccObj.put("email", u.getEmail());
            allReccomendations.add(reccObj);
        }
        System.out.println("------------------------------------------");

        return ResponseEntity.ok().body(allReccomendations);

        /*
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
        */
    }
}
