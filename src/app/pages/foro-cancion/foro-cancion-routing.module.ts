import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoCancionPage } from './foro-cancion.page';

const routes: Routes = [
  {
    path: '',
    component: ForoCancionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoCancionPageRoutingModule {}
