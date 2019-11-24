import { ListData } from 'src/modal/list-data';
import { Injectable } from '@angular/core';
import { UtilService } from './utils-service';

@Injectable()
export class ValidationService {
    constructor(
        public utilService:UtilService
    ){}

    checkIfSameTodoExist(listData:ListData){
        let isTaskAlreadyPresent:boolean = false;
        let taskList:ListData[] = this.utilService.getTasksOnDate(listData.date);
        for (const task of taskList) {
            if(task.category == listData.category){
                return true;
            }
        }
        return isTaskAlreadyPresent;
    }
}