import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiPageRoutingModule } from './api-routing.module';

import { ApiPage } from './api.page';
import { ShareModule } from 'src/app/modulos/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiPageRoutingModule,
    ShareModule
  ],
  declarations: [ApiPage]
})
export class ApiPageModule {}
