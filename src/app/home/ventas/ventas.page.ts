import { Component, OnInit } from '@angular/core';

import{ventaI} from '../../models/ventas.interface';
import{VentasService} from '../../service/ventas.service';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  ventas: ventaI[];
  constructor(private ventasservices:VentasService) { }

  ngOnInit() {
    this.ventasservices.getTodos().subscribe(res =>  
      /*console.log('categorias', res);*/
      this.ventas = res);
  }

}
