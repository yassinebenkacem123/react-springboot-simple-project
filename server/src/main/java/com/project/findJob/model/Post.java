package com.project.findJob.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private int experience;
    private String profile;
    @ManyToMany(cascade = {
        CascadeType.MERGE,
        CascadeType.PERSIST
    }, fetch = FetchType.EAGER)
    @JoinTable(
        name="post_tech",
        joinColumns = @JoinColumn(name="post_id"),
        inverseJoinColumns = @JoinColumn(name="tech_id")
    )
    private List<Tech> techs = new ArrayList<Tech>();
    
    //Constructors :
    public Post(){};
    
    public Post(Long id, String description, int experience, List<Tech> techs){
        this.id  = id;
        this.description = description;
        this.experience = experience;
        this.techs = techs;
    };


    public String getProfile() {
        return profile;
    }

    public String getDescription() {
        return description;
    }
    public int getExperience() {
        return experience;
    }
    public Long getId() {
        return id;
    }
    public List<Tech> getTechs() {
        return techs;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setExperience(int experience) {
        this.experience = experience;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setTechs(ArrayList<Tech> techs) {
        this.techs = techs;
    }
}
