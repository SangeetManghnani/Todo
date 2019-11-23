import { Component, OnInit } from '@angular/core';
import { ListData } from 'src/modal/list-data';
import { ListItemData } from 'src/modal/list-item-data';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.page.html',
  styleUrls: ['./create-list.page.scss'],
})
export class CreateListPage implements OnInit {
  todoList:ListData = new ListData();
  enableTodoList:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  switchTodoListTask(){
    this.enableTodoList = !this.enableTodoList;
  }

}
