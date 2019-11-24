import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ListData } from 'src/modal/list-data';

@Injectable()
export class UtilService {
    constructor(
        public toastCtrl:ToastController
    ){

    }

    async presentToast(msg){
        const toast = await this.toastCtrl.create({
            message:msg,
            duration:2000,
            position:"bottom"
        });
        toast.present();
    }

    getFormattedDate(date) {
        date = new Date(date);
        let dd: string = String(date.getDate()).padStart(2, '0');
        let mm: string = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy: Number = date.getFullYear();
        let formattedDate: string = `${yyyy}/${mm}/${dd}`;
        
        return formattedDate;
     }

     getFormattedTime(date:string){
        let newDate = new Date(date);
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();
        let seconds = newDate.getSeconds();
        let formattedTime:string = `${hours}:${minutes}:${seconds}`;
        return formattedTime;
     }

    storeCreateList(listData:ListData){
        let storedData:ListData[] =  JSON.parse(localStorage.getItem(listData.date));
        if(storedData && storedData.length > 0){
            storedData.push(listData);
            localStorage.setItem(listData.date,  JSON.stringify(storedData));
        }else{
            localStorage.setItem(listData.date, JSON.stringify([listData]));
        }
    }
    getTasksCount(tasks) {
        let tasksCount = 0; 
        tasks.map((task) => {
            if(!task.isChecked) {
                tasksCount++;
            }
        });
        return tasksCount;
    }
}