import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre : string =""
  usuario : string =""
  password : string = ""


  constructor(public mensaje:ToastController,public alerta:AlertController, private router:Router, private storage : Storage) {  }

  async MensajeError() {
    const alert = await this.alerta.create({
      header: 'Error de inicio de session ',
      subHeader: 'Contraseña o usuario erroneo',
      message: 'Error al iniciar sesion en la cuenta',
      buttons: ['Aceptar']
    });
  
    await alert.present();
  }

  async MensajeCorrecto() {
    const toast = await this.mensaje.create({
      message: 'Inicio de session exitoso ',
      duration: 2000
    });
    toast.present();
  }

  ingresar(){
    if (this.usuario ==="" || this.password==="" ){
      console.log("No puede dejar el usuario y constraseña vacios ")
      this.MensajeError()
    }
    else{
      this.storage.set("nombre",this.nombre)
      this.storage.set("SessionID",true)
      console.log("inicio de sesion exitoso ")
      this.MensajeCorrecto()
      this.router.navigate(["/home"])
      
    }
  }


  async ngOnInit() {
    await this.storage.create();
  }

}
