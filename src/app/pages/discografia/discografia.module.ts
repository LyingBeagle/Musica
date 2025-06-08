import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscografiaPageRoutingModule } from './discografia-routing.module';

import { DiscografiaPage } from './discografia.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    DiscografiaPageRoutingModule
  ],
  declarations: [DiscografiaPage]
})
export class DiscografiaPageModule {}
