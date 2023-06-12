import {Component, Input} from '@angular/core';
import {Todo} from "../../models/Todo";
import {todos} from "../../todos";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoList: Todo[] =  todos

}
