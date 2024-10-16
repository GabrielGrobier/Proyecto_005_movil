import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service'; 
// importa lib para poder utilizar la camara 
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';
// es para que funcione la camara desde el navegador 
import {defineCustomElements} from '@ionic/pwa-elements/loader';
defineCustomElements(window);
import { Geolocation } from '@capacitor/geolocation';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  async tomarFoto(){
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera,
      quality:100,
    });
    console.log(image.webPath);
  }

  async obtenerUbicacion(){
    const coordenadas = await Geolocation.getCurrentPosition();
    console.log('Latitud ==> ',coordenadas.coords.latitude);
    console.log('Longitud ==> ', coordenadas.coords.longitude);
    console.log('Altitud',coordenadas.coords.altitude)
    console.log('Velocidad',coordenadas.coords.speed)
    console.log('exactitud',coordenadas.coords.accuracy)
  }


  nombre : string =""
  usuario : string =""
  password : string = ""


  constructor(public mensaje:ToastController,public alerta:AlertController, private router:Router, private storage : Storage,private access:FirebaseLoginService) { 
    this.obtenerUbicacion();
   }

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
      this.access.login(this.usuario,this.password).then(()=>{
        this.storage.set("nombre",this.nombre)
        this.storage.set("SessionID",true)
        console.log("inicio de sesion exitoso ")
        this.MensajeCorrecto()
        this.router.navigate(["/home"])

      }).catch(()=>{
        this.MensajeError()
      })      
    }
  }


  async ngOnInit() {
    await this.storage.create();
  }

}
