import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForoCancionPageRoutingModule } from './foro-cancion-routing.module';

import { ForoCancionPage } from './foro-cancion.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ForoCancionPageRoutingModule
  ],
  declarations: [ForoCancionPage]
})
export class ForoCancionPageModule {}