package com.example.demo.dto;

import com.example.demo.domain.Todo;
import lombok.Getter;

@Getter
public class TodoResponse {
    private Long id;
    private  String content;
    private  boolean done;
    private Long date;

    public TodoResponse(Todo todo){
        this.id =todo.getId();
        this.content=todo.getContent();
        this.done=todo.isDone();
        this.date=todo.getDate()
                .atZone(java.time.ZoneId.systemDefault())
                .toInstant()
                .toEpochMilli();
    }
}
