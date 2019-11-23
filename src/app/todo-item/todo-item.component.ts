import { Component, OnInit, Input, SimpleChanges, ViewChild } from '@angular/core';
import { ListItemData } from 'src/modal/list-item-data';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem:ListItemData;
  @ViewChild('todoInput', {static:false}) todoInput:IonInput
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes["todoItem"] && changes["todoItem"].currentValue){
      this.todoItem = changes["todoItem"].currentValue;
    }
  }

  ngOnInit() {
    
  }

  haveFocusOnInput(){
    this.todoInput.setFocus();
  }

}
