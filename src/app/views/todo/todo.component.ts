import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodoItem } from './todo-item';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todoList: Array<TodoItem> = [];
  todoForm: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadTodoList();
    this.todoForm = this.createTodoForm();
  }

  addTodo(): void {
    this.todoService.addTodoItem(this.todoForm.value).then(() => {
      this.loadTodoList();
      this.todoForm.reset();
    });
  }

  createTodoForm(): FormGroup {
    return this.formBuilder.group({
      description: ['', Validators.required],
      isDone: [false]
    });
  }

  private loadTodoList(): void {
    this.todoService.getTodoList().then(result => (this.todoList = result));
  }

  removeTodo(id: number): void {
    this.todoService.removeTodoItem(id).then(() => this.loadTodoList());
  }
}
