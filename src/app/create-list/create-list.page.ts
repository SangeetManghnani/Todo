import { Component, OnInit, ViewChild } from '@angular/core';
import { ListData } from 'src/modal/list-data';
import { ListItemData } from 'src/modal/list-item-data';
import { TodoItemListComponent } from '../todo-item-list/todo-item-list.component';
import { UtilService } from 'src/services/utils-service';
import { Router } from '@angular/router';
import { Constants } from 'src/Constants';
import { ValidationService } from 'src/services/validation-service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.page.html',
  styleUrls: ['./create-list.page.scss'],
})
export class CreateListPage implements OnInit {

  @ViewChild('todoListItem' ,{static:false}) todoListItem:TodoItemListComponent
  todoList:ListData = new ListData();
  enableTodoList:boolean = false;
  mode:string = "";
  constructor(
    public utilService:UtilService,
    public validationService:ValidationService,
    public router:Router
  ) { }

  ngOnInit() {
    let currentNavigation = this.router.getCurrentNavigation();
    if(currentNavigation && currentNavigation.extras && currentNavigation.extras.state){
      this.mode = currentNavigation.extras.state.mode;
      this.todoList = currentNavigation.extras.state.task;
    }
  }

  ngAfterViewInit() {
    this.assignTodoItemsInEdit();
  }


  switchTodoListTask(){
    this.enableTodoList = !this.enableTodoList;
  }

  selectPriority(priority:string){
    this.todoList.priority = priority;
  }

  saveList(){
    if(this.todoListItem && this.todoListItem.allTodoItems && this.todoListItem.allTodoItems.length > 0){
      this.todoList.items = this.todoListItem.allTodoItems;
    }
    if(!this.todoList.priority){
      this.todoList.priority = "low";
    }
    if(!this.todoList.date){
      this.utilService.presentToast("Please provide date to continue");
      return;
    }
    this.todoList.date = this.utilService.getFormattedDate(this.todoList.date);
    this.todoList.time = this.utilService.getFormattedTime(this.todoList.time);
    this.utilService.removeEmptyListItem(this.todoList);
    let isTaskAlreadyExistOnDate:boolean = this.validationService.checkIfSameTodoExist(this.todoList);
    if(isTaskAlreadyExistOnDate){
      this.utilService.presentToast("Task already exist with same category");
      return;
    }
    this.utilService.storeCreateList(this.todoList);
    this.router.navigate(['home']);
  }

  assignTodoItemsInEdit(){
    if(this.todoList && this.todoList.items && this.todoList.items.length > 0 && this.todoListItem){
      this.todoListItem.allTodoItems = this.todoList.items;
    }
  }

  


}
