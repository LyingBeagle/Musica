import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscografiaPage } from './discografia.page';

const routes: Routes = [
  {
    path: '',
    component: DiscografiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscografiaPageRoutingModule {}
