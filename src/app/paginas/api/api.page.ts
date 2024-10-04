import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/servicios/api.service'


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  datos:any[]=[];

  constructor(private apiservice : ApiService) { }

  ngOnInit() {
    this.init();
  }

  init(){
    this.apiservice.solicitud().subscribe((data:any)=>{
      console.log('Datos recibidos ', data);
      this.datos = data.meals;

    })
  }
}
