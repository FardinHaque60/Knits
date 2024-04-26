package com.example.backend.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.entity.User;
import java.util.List;


// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByEmail(String email);
}
