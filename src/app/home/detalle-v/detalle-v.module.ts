import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleVPageRoutingModule } from './detalle-v-routing.module';

import { DetalleVPage } from './detalle-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleVPageRoutingModule
  ],
  declarations: [DetalleVPage]
})
export class DetalleVPageModule {}
