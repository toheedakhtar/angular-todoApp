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
  localItem: any;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      this.localItem = localStorage.getItem("todos")


      if (this.localItem == null) {
        this.todos = [
          {
            sno: 1,
            title: "Do 100 pushups",
            desc: "To do 100 pushups in day. Can be done in sets of 10",
            active: true
          },
          {
            sno: 2,
            title: "Drink 7 lts of Water",
            desc: "Made sure to Get 7 ltr of Water in a day. Dont drink more than 1.5 ltr in an hour",
            active: false
          },
          {
            sno: 3,
            title: "Grind LeetCode",
            desc: "Do at least 2 easy LeetCode or 1 medium LeetCode problem",
            active: false
          }
        ]
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

  toggleTodo(todo: Todo) {
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
