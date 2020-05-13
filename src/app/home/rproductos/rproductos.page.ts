import { Component, OnInit } from '@angular/core';

import{categoriaI} from '../../models/categoria.interface';
import{TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-rproductos',
  templateUrl: './rproductos.page.html',
  styleUrls: ['./rproductos.page.scss'],
})
export class RproductosPage implements OnInit {
  todos: categoriaI[];
  constructor(private todoservice:TodoService) { }

  ngOnInit() {
    this.todoservice.getTodos().subscribe(res => 
      /*console.log('categorias', res);*/
      this.todos = res);
  }

  /*para imprimir en consola
  ngOnInit() {
    this.todoservice.getTodos().subscribe(res => {
      console.log('categorias', res);
    });  
  }*/
}
