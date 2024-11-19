import { Component, Inject } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoItemComponent, TodoAddComponent, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[];
  localItem: string;
  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {

      this.localItem = localStorage.getItem("todos")

      if (this.localItem == null) {
        this.todos = []
      }
      else {
        this.todos = JSON.parse(this.localItem)
      }
    }
  }

  delTodo(todo: Todo) {
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  addTodo(todo: Todo) {
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

}
