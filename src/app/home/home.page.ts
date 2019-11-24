import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListData } from 'src/modal/list-data';
import { UtilService } from 'src/services/utils-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public router: Router,
    public utilService:UtilService
    ) {}
  taskCount : number = 0;
  date:string = "";
  tasksToDisplay: ListData[] = [];
  ngOnInit() {
    this.date = this.utilService.getFormattedDate(new Date());
  }
  
  ionViewWillEnter(){
   this.tasksToDisplay = [];
   let today : string = this.utilService.getFormattedDate(new Date());
   this.tasksToDisplay = this.utilService.getTasksOnDate(today);
  }

  navigateToCreateList(){
    this.router.navigate(['create-list']);
  }
  dateChanged(ev) {
    this.tasksToDisplay = [];
    const dateSelected = this.utilService.getFormattedDate(ev.detail.value);
    console.log(dateSelected);
    this.tasksToDisplay = this.utilService.getTasksOnDate(dateSelected);
  }
}
