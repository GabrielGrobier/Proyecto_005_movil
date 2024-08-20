import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string ="";

  constructor(public alerta:AlertController) {}

  async presentAlert(titulo:string,message:string){
    const alert = await this.alerta.create({
      header:titulo,
      message:message,
      buttons:["ok"]
    })
    await alert.present();
  }
  
  //este es un comentario para el commit 

  mostrarAlerta(){
    (this.nombre!="" && this.presentAlert("Usuario ", "su nombre es " + this.nombre  ) ||  this.presentAlert("Usuario ", "el campo no puede estar vacio ")) 
  }
  


  mostrar_nombre(){
    console.log(this.nombre)
  }

}
