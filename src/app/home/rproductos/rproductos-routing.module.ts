import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RproductosPage } from './rproductos.page';

const routes: Routes = [
  {
    path: '',
    component: RproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RproductosPageRoutingModule {}
