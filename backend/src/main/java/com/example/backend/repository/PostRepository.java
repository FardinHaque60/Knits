package com.example.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.entity.Post;

public interface PostRepository extends CrudRepository<Post, Integer> {
    
}
