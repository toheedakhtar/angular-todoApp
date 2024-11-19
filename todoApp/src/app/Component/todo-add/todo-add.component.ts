import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})

export class TodoAddComponent {
  title: string
  desc: string
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onSubmit() {

    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    console.log('Submitting..')
    this.todoAdd.emit(todo);

  }
}
