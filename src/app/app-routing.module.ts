import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'rproductos',
    loadChildren: () => import('./home/rproductos/rproductos.module').then( m => m.RproductosPageModule)
  },

  {
    path: 'detalle/:idd',
    loadChildren: () => import('./home/detalle/detalle.module').then( m => m.DetallePageModule)
  },

  {
    path: 'detalle',
    loadChildren: () => import('./home/detalle/detalle.module').then( m => m.DetallePageModule)
  },

  {
    path: 'mantenimientos',
    loadChildren: () => import('./home/mantenimientos/mantenimientos.module').then( m => m.MantenimientosPageModule)
  },

  {
    path: 'detalle-m/:idd',
    loadChildren: () => import('./home/detalle-m/detalle-m.module').then( m => m.DetalleMPageModule)
  },

  {
    path: 'detalle-m',
    loadChildren: () => import('./home/detalle-m/detalle-m.module').then( m => m.DetalleMPageModule)
  },

  {
    path: 'ventas',
    loadChildren: () => import('./home/ventas/ventas.module').then( m => m.VentasPageModule)
  },

  {
    path: 'detalle-v/:idd',
    loadChildren: () => import('./home/detalle-v/detalle-v.module').then( m => m.DetalleVPageModule)
  },

  {
    path: 'detalle-v',
    loadChildren: () => import('./home/detalle-v/detalle-v.module').then( m => m.DetalleVPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
