import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsComponent } from './students/students.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [TodoComponent, StudentsComponent, PageNotFoundComponent],
  exports: [TodoComponent, StudentsComponent, PageNotFoundComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ViewsModule {}
