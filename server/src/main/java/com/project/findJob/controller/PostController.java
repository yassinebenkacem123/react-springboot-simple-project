package com.project.findJob.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.findJob.doa.PostRepository;
import com.project.findJob.model.Post;

@RestController
@RequestMapping("/api/v1")
public class PostController {
    @Autowired
    PostRepository postRepo;

    @GetMapping("/getPosts")
    public List<Post> getMessage() {
        return postRepo.findAll();
    }

    @PostMapping(value = "/addPost", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Post addPost(@RequestBody Post post) {
        Post saved = postRepo.save(post);
        return saved;
    }

}
