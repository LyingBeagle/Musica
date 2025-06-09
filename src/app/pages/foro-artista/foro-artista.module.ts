import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoArtistaPageRoutingModule } from './foro-artista-routing.module';

import { ForoArtistaPage } from './foro-artista.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    ForoArtistaPageRoutingModule
  ],
  declarations: [ForoArtistaPage]
})
export class ForoArtistaPageModule {}