import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMPageRoutingModule } from './detalle-m-routing.module';

import { DetalleMPage } from './detalle-m.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMPageRoutingModule
  ],
  declarations: [DetalleMPage]
})
export class DetalleMPageModule {}
