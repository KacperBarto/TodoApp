import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { StudentsComponent } from './students/students.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';

@NgModule({
  declarations: [TodoComponent, StudentsComponent, PageNotFoundComponent, TodoItemComponent],
  exports: [TodoComponent, StudentsComponent, PageNotFoundComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule]
})
export class ViewsModule {}
