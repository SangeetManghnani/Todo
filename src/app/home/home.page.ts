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
  }
  
  ionViewWillEnter(){
   this.tasksToDisplay = [];
   let today : string = this.getFormattedDate(new Date());
   this.tasksToDisplay = this.utilService.getTasksOnDate(today);
  }

  navigateToCreateList(){
    this.router.navigate(['create-list']);
  }

  getFormattedDate(date) {
    date = new Date(date);
    let dd: string = String(date.getDate()).padStart(2, '0');
    let mm: string = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy: Number = date.getFullYear();
    let formattedDate: string = `${yyyy}/${mm}/${dd}`;

    return formattedDate;
  }
  
  
  // setItem() {
  //   var dateSet = this.getFormattedDate(new Date('2019/11/28'));
  //   var data2 = [{
  //     category: 'Leasure', 
  //     priority: 'high',
  //     date: dateSet,
  //     time: '07:00 am',
  //     items: [{
  //       isChecked: false,
  //       item_name: 'Go out'
  //     },
  //     {
  //       isChecked: false,
  //       item_name: 'Maje Karo'
  //     }]
  //   },{
  //     category: 'Exercises', 
  //     priority: 'medium',
  //     date: dateSet,
  //     time: '09:00 am',
  //     items: [{
  //       isChecked: false,
  //       item_name: 'Cardio run'
  //     },
  //     {
  //       isChecked: false,
  //       item_name: 'Cycling cardio'
  //     }]
  //   },{
  //     category: 'Chores Daily', 
  //     priority: 'high',
  //     date: dateSet,
  //     time: '5:00 pm',
  //     items: [{
  //       isChecked: false,
  //       item_name: 'Dump waste'
  //     },
  //     {
  //       isChecked: false,
  //       item_name: 'Mopping'
  //     }]
  //   }];
    
  //   this.tasks = [];
  //   window.localStorage.setItem(dateSet, JSON.stringify(data2));
  // }
  dateChanged(ev) {
    const dateSelected = this.getFormattedDate(ev.detail.value);
    console.log(dateSelected);
    this.utilService.getTasksOnDate(dateSelected);
  }
  
}
