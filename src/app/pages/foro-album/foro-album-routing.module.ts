import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForoAlbumPage } from './foro-album.page';

const routes: Routes = [
  {
    path: '',
    component: ForoAlbumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForoAlbumPageRoutingModule {}