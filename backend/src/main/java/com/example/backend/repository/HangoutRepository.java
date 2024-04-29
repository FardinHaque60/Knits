package com.example.backend.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.backend.entity.Hangout;
import com.example.backend.entity.User;

public interface HangoutRepository extends CrudRepository<Hangout, Integer> {
    List<Hangout> findAllByHost(User host);
}
