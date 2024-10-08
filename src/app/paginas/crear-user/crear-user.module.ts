import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearUserPageRoutingModule } from './crear-user-routing.module';

import { CrearUserPage } from './crear-user.page';
import { ShareModule } from 'src/app/modulos/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearUserPageRoutingModule,
    ShareModule
  ],
  declarations: [CrearUserPage]
})
export class CrearUserPageModule {}
