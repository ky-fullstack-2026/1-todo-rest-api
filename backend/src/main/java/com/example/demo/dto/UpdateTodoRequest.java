package com.example.demo.dto;

import lombok.Getter;

@Getter
public class UpdateTodoRequest {
    private String content;
    private boolean done;
}
