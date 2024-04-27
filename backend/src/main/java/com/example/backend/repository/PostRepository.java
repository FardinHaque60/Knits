package com.example.backend.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.backend.entity.Post;
import com.example.backend.entity.User;

import java.util.List;


public interface PostRepository extends CrudRepository<Post, Integer> {
    List<Post> findByAuthor(User author);
    @Query("SELECT p FROM Post p WHERE p.author IN :authors")
    List<Post> findAllByAuthor(List<User> authors);
}
