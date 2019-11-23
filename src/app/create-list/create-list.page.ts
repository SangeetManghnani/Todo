import { Component, OnInit } from '@angular/core';
import { ListData } from 'src/modal/list-data';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.page.html',
  styleUrls: ['./create-list.page.scss'],
})
export class CreateListPage implements OnInit {
  todoList:ListData = new ListData();
  constructor() { }

  ngOnInit() {
  }

}
