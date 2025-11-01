package com.project.findJob.doa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.findJob.model.Post;

public interface PostRepository extends JpaRepository<Post,Long> {

    
} 
