package com.example.demo.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;

    private boolean done;
    private LocalDateTime date;


    public Todo(String content){
        this.content=content;
        this.done=false;
        this.date=LocalDateTime.now();
    }
    public void update(String content,boolean done){

        this.content=content;
        this.done=done;
    }
}
