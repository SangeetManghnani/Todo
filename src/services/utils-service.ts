import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
}