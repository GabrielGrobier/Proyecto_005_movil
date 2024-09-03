import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimacionesPage } from './animaciones.page';

const routes: Routes = [
  {
    path: '',
    component: AnimacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimacionesPageRoutingModule {}
