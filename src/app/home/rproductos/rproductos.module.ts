import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RproductosPageRoutingModule } from './rproductos-routing.module';

import { RproductosPage } from './rproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RproductosPageRoutingModule
  ],
  declarations: [RproductosPage]
})
export class RproductosPageModule {}
