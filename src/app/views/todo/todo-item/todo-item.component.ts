import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoItem;
  @Input() isFirst: boolean;
  @Output() removeItem = new  EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo(id: number, ev: any) {
    console.log(id);
    ev.stopPropagation();
    this.removeItem.emit(id);
  }
}
