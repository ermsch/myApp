import {Component, Input} from '@angular/core';
import {Todo} from "../../models/Todo";
import {todos} from "../../todos";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input() todo!: Todo




}
