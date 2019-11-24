import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  taskCount : number = 0;
  date:string = "";
  tasks: Array<Object>;
  ngOnInit() {
    // fetch data from local storage
    this.date = (new Date()).toString();
    this.setItem();
    let today : string = this.getFormattedDate(new Date());
    this.tasks = JSON.parse(window.localStorage.getItem(today));
    // this.taskCount = this.tasks.length();
  }

  getFormattedDate(date) {
    date = new Date(date);
    let dd: string = String(date.getDate()).padStart(2, '0');
    let mm: string = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy: Number = date.getFullYear();
    let formattedDate: string = `${yyyy}/${mm}/${dd}`;

    return formattedDate;
  }
  
  getTasks(date) {
    this.tasks = [];
    let tasks = JSON.parse(window.localStorage.getItem(date));
    tasks.map((task) => {
      this.tasks.push(task);
    })
  }
  setItem() {
    var dateSet = this.getFormattedDate(new Date('2019/11/28'));
    var data2 = [{
      category: 'Leasure', 
      priority: 'high',
      date: dateSet,
      time: '07:00 am',
      items: [{
        isChecked: false,
        item_name: 'Go out'
      },
      {
        isChecked: false,
        item_name: 'Maje Karo'
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
    // var data = [{
    //   category: 'Shopping', 
    //   priority: 'high',
    //   date: dateSet,
    //   time: '07:00 am',
    //   items: [{
    //     isChecked: false,
    //     item_name: 'Buy Clothes'
    //   },
    //   {
    //     isChecked: false,
    //     item_name: 'Lauki kharido'
    //   }]
    // },{
    //   category: 'Exercises', 
    //   priority: 'medium',
    //   date: dateSet,
    //   time: '09:00 am',
    //   items: [{
    //     isChecked: false,
    //     item_name: 'Cardio run'
    //   },
    //   {
    //     isChecked: false,
    //     item_name: 'Cycling cardio'
    //   }]
    // },{
    //   category: 'Chores Daily', 
    //   priority: 'high',
    //   date: dateSet,
    //   time: '5:00 pm',
    //   items: [{
    //     isChecked: false,
    //     item_name: 'Dump waste'
    //   },
    //   {
    //     isChecked: false,
    //     item_name: 'Mopping'
    //   }]
    // }];
    this.tasks = [];
    window.localStorage.setItem(dateSet, JSON.stringify(data2));
  }
  dateChanged(ev) {
    const dateSelected = this.getFormattedDate(ev.detail.value);
    console.log(dateSelected);
    this.getTasks(dateSelected);
  }
  
}
