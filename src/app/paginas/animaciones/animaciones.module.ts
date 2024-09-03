import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacionesPageRoutingModule } from './animaciones-routing.module';

import { AnimacionesPage } from './animaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacionesPageRoutingModule
  ],
  declarations: [AnimacionesPage]
})
export class AnimacionesPageModule {}
