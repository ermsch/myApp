import {Component, inject, Input, OnInit} from '@angular/core';
import {Todo} from "../../models/Todo";
import {todos} from "../../todos";
import {TodoService} from "../../todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  // private todoService = inject(TodoService)

  todoList: Todo[] =  todos

  constructor(private todoService: TodoService) {
  }

  ngOnInit(){
    const todos = this.todoService.getTodos()
    console.log(todos)

  }

}
