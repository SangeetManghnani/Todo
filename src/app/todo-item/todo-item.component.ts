import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ListItemData } from 'src/modal/list-item-data';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem:ListItemData
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes["todoItem"] && changes["todoItem"].currentValue){
      this.todoItem = changes["todoItem"].currentValue;
    }
  }

  ngOnInit() {
    
  }

}
