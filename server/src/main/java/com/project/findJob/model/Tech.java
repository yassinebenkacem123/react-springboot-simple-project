package com.project.findJob.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tech {
    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    Long tech_id ;    
    String name;

    public Tech(){};
    
    public Tech(String name, Long tech_id){
        this.name = name;
        this.tech_id = tech_id;
    }
    public String getName() {
        return name;
    }
    public Long getTech_id() {
        return tech_id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setTech_id(Long tech_id) {
        this.tech_id = tech_id;
    }
    

}
