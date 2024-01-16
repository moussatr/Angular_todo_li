// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrl: './todo.component.css'
// })
// export class TodoComponent {

// }

import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo: Todo = { id: 0, title: '', completed: false };

  constructor(private todoService: TodoService) {
    this.todos = todoService.getTodos();
  }

  addTodo(): void {
    this.todoService.addTodo({ ...this.newTodo, id: Date.now() });
    this.newTodo = { id: 0, title: '', completed: false };
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo);
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }
}
