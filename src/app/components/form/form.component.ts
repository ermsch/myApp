import { Component } from '@angular/core';
import {todos} from "../../todos";
import {Todo} from "../../models/Todo";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name!: string
  date!: string
  done!: boolean



  sendForm(){

    const todo: Todo = {
      id: todos.length + 1,
      name: this.name,
      date: this.date,
      done: this.done,
    }
    todos.push(todo)
    // this.name = ''
    // this.date = ''
  }
}
