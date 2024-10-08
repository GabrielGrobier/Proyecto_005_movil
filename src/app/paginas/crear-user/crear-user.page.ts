import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.page.html',
  styleUrls: ['./crear-user.page.scss'],
})
export class CrearUserPage implements OnInit {
  nombre : string =""
  usuario : string =""
  password : string = ""

  constructor(private access:FirebaseLoginService, router:Router) { }

  async crearUsuario(){
    await this.access.create_user(this.usuario,this.password);
    }
    
  

  ngOnInit() {
  }

}
