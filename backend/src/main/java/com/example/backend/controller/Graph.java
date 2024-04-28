package com.example.backend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.Following;
import com.example.backend.entity.User;
import com.example.backend.repository.FollowingRepository;

class Graph {
    private Set<Node> graph;

    Graph() {
        graph = new HashSet<>();
    }

    Set<Node> makeGraph(Iterable<Following> relationships, Iterable<User> allUsers) {
        Node userNode; Node followingNode;
        for (Following f: relationships) {
            userNode = findNode(graph, f.getUser());
            followingNode = findNode(graph, f.getFollowing());
            if (userNode == null) {
                userNode = new Node(f.getUser());
                graph.add(userNode);
            }
            if (followingNode == null) {
                followingNode = new Node(f.getFollowing());
                graph.add(followingNode);
            }
            //userNode and followingNode represent a active node at this point
            userNode.addFollowing(followingNode);
        }
        for (User u: allUsers) {
            userNode = findNode(graph, u);
            if (userNode == null) {
                userNode = new Node(u);
                graph.add(userNode);
            }
        }

        return graph;
    }

    static Node findNode(Set<Node> g, User u) {
        for (Node n: g) {
            if (n.getUser().equals(u)) {
                return n;
            }
        }
        return null;
    }
}

class Node {
    private User user;
    private boolean discovered;
    private Set<Node> following;
    private Node parent;

    Node(User u) {
        user = u; discovered = false;
        following = new HashSet<>();
        parent = null;
    }

    void setParent(Node n) {
        parent = n;
    }

    Node getParent() {
        return parent;
    }

    void setDiscovery(boolean b) {
        discovered = true;
    }

    boolean getDiscovery() {
        return discovered;
    }

    void addFollowing(Node n) {
        following.add(n);
    }

    Set<Node> getFollowing() {
        return following;
    }
    
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}