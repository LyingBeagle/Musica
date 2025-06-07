import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoArtistaPage } from './foro-artista.page';

const routes: Routes = [
  {
    path: '',
    component: ForoArtistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoArtistaPageRoutingModule {}
