import { Injectable } from '@angular/core';
import { TODO_LIST } from './todo.mock';
import { TodoItem } from './todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Array<TodoItem> = [];
  constructor() {
    this.todoList = TODO_LIST;
  }

  addTodoItem(todo: TodoItem): Promise<number> {
    const ids: Array<number> = this.todoList.map(todoItem => todoItem.id);
    let id: number = Math.max.apply(Math, ids) + 1;

    if (!Number.isFinite(id)) {
      id = 1;
    }
    console.log('id', id);

    return Promise.resolve(
      this.todoList.push({
        id,
        ...todo
      })
    );
  }

  getTodoList(): Promise<Array<TodoItem>> {
    return Promise.resolve(this.todoList);
  }

  removeTodoItem(id: number): Promise<Array<TodoItem>> {
    const index: number = this.todoList.findIndex(
      todoItem => todoItem.id === id
    );
    return Promise.resolve(this.todoList.splice(index, 1));
  }
}
