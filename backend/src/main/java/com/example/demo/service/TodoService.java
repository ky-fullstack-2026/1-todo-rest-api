package com.example.demo.service;

import com.example.demo.domain.Todo;
import com.example.demo.dto.CreateTodoRequest;
import com.example.demo.dto.TodoResponse;
import com.example.demo.dto.UpdateTodoRequest;
import com.example.demo.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoResponse create(CreateTodoRequest request){
        Todo todo = new Todo(request.getContent());

        Todo saved = todoRepository.save(todo);

        return new TodoResponse(saved);
    }

    public List<TodoResponse> findAll(){
        return todoRepository.findAll()
                .stream()
                .map(TodoResponse::new)
                .collect(Collectors.toList());
    }
    public TodoResponse findById(Long id){
        Todo todo =todoRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("Todo not found:"+id));

        return new TodoResponse(todo);
    }

    public TodoResponse update(Long id, UpdateTodoRequest request){
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("Todo not found:"+id));

        todo.update(

                request.getContent(),
                request.isDone()
        );
        return new TodoResponse(todo);
    }
    public  void delete(Long id){
        todoRepository.deleteById(id);
    }

}
