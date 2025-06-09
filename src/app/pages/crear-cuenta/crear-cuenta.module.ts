import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCuentaPageRoutingModule } from './crear-cuenta-routing.module';

import { CrearCuentaPage } from './crear-cuenta.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    CrearCuentaPageRoutingModule
  ],
  declarations: [CrearCuentaPage]
})
export class CrearCuentaPageModule {}
