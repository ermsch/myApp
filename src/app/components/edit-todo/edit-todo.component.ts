import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Todo} from "../../models/Todo";
import {todos} from "../../todos";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent {
  id!: any
  constructor(private route: ActivatedRoute) {
  }

  todo: Todo[] = todos

  name: string = ''
  date: string = ''

  editTodo(){
    const newTodo: Todo = {
      id: this.id + 1,
      name: this.name,
      date: this.date,
      done: false
    }
    const index = todos.findIndex(todo => todo.id === this.id + 1);
    todos.splice(index, 1, newTodo);

  }
  ngOnInit(){
    // this.id = parseInt(this.route.snapshot.paramMap.get('id')
    // console.log(this.id)


    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.id -= 1
    })
  }




}
