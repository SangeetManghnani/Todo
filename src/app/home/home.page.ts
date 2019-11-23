import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  taskCount : number = 4;
  date:string = "";
  tasks: Array<Object> = [];
  ngOnInit() {
    // fetch data from local storage
    this.setItem();
    let today : string = this.getFormattedDate(new Date());
    this.tasks = window.localStorage.getItem(today);
    console.log(this.tasks);
    this.tasks = JSON.parse(this.tasks);
  }

  getFormattedDate(date) {
    let dd: string = String(date.getDate()).padStart(2, '0');
    let mm: string = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy: Number = date.getFullYear();
    let formattedDate: string = `${yyyy}/${mm}/${dd}`;

    return formattedDate;
  }
  
  getTasks(date) {
    console.log(date);
  }
  setItem() {
    var dateSet = this.getFormattedDate(new Date());
    var data = [{
      category: 'Shopping', 
      priority: 'high',
      date: dateSet,
      time: '07:00 am',
      items: [{
        isChecked: false,
        item_name: 'Buy Clothes'
      },
      {
        isChecked: false,
        item_name: 'Lauki kharido'
      }]
    },{
      category: 'Exercises', 
      priority: 'medium',
      date: dateSet,
      time: '09:00 am',
      items: [{
        isChecked: false,
        item_name: 'Cardio run'
      },
      {
        isChecked: false,
        item_name: 'Cycling cardio'
      }]
    },{
      category: 'Chores Daily', 
      priority: 'high',
      date: dateSet,
      time: '5:00 pm',
      items: [{
        isChecked: false,
        item_name: 'Dump waste'
      },
      {
        isChecked: false,
        item_name: 'Mopping'
      }]
    }];
    window.localStorage.setItem(dateSet, JSON.stringify(data));
  }
  dateChanged(ev) {
    console.log(ev.detail.value);
    console.log(this.date);
  }
  
}
