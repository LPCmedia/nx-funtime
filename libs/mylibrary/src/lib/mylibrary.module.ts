import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodosComponent } from './todos/todos.component';
import { MyCoreModule } from '@activia/my-core';

@NgModule({
  imports: [CommonModule, MyCoreModule],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class MylibraryModule {}
