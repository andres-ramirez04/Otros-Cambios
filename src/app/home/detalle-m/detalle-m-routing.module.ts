import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMPage } from './detalle-m.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMPageRoutingModule {}
