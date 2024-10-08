import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearUserPage } from './crear-user.page';

const routes: Routes = [
  {
    path: '',
    component: CrearUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearUserPageRoutingModule {}
