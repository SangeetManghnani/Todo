import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateListPageRoutingModule } from './create-list-routing.module';

import { CreateListPage } from './create-list.page';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoItemListComponent } from '../todo-item-list/todo-item-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateListPageRoutingModule
  ],
  declarations: [
    CreateListPage,
    TodoItemComponent,
    TodoItemListComponent
  ],
  exports: [
    TodoItemComponent,
    TodoItemListComponent
  ]
})
export class CreateListPageModule {}
