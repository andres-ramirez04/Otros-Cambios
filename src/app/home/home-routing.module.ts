import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'rproductos',
    loadChildren: () => import('./rproductos/rproductos.module').then( m => m.RproductosPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'mantenimientos',
    loadChildren: () => import('./mantenimientos/mantenimientos.module').then( m => m.MantenimientosPageModule)
  },
  {
    path: 'detalle-m',
    loadChildren: () => import('./detalle-m/detalle-m.module').then( m => m.DetalleMPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
