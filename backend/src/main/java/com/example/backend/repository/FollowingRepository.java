package com.example.backend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.entity.Following;
import com.example.backend.entity.User;

public interface FollowingRepository extends CrudRepository<Following, Integer> {
    List<Following> findByUser(User u);
    List<Following> findByFollowing(User u);
    Following findByUserAndFollowing(User u, User f);
} 
