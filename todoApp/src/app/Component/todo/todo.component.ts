import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is title1",
        desc: "desc1",
        active: true
      },
      {
        sno: 2,
        title: "This is title2",
        desc: "desc2",
        active: true
      },
      {
        sno: 3,
        title: "This is title3",
        desc: "desc3",
        active: true
      }

    ]
  }

}