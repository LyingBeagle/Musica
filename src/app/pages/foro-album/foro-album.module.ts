import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoAlbumPageRoutingModule } from './foro-album-routing.module';

import { ForoAlbumPage } from './foro-album.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ForoAlbumPageRoutingModule
  ],
  declarations: [ForoAlbumPage]
})
export class ForoAlbumPageModule {}