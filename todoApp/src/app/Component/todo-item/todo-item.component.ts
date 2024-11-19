import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
// import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo
  @Output() todoDel: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  onClick(todo: Todo) {
    this.todoDel.emit(todo);
  }
}
