import { Component, OnInit } from '@angular/core';

import{mantenimientoI} from '../../models/mantenimiento.interface';
import{TodomService} from '../../service/todom.service';
@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.page.html',
  styleUrls: ['./mantenimientos.page.scss'],
})
export class MantenimientosPage implements OnInit {
  todosm: mantenimientoI[];
  constructor(private todomservice:TodomService) { }

  ngOnInit() {
    this.todomservice.getTodos().subscribe(res => 
      /*console.log('categorias', res);*/
      this.todosm = res);
  }

}
