import { Component, OnInit } from '@angular/core';

import{categoriaI}from '../../models/categoria.interface';
import{TodoService} from '../../service/todo.service';
import{ActivatedRoute} from '@angular/router';
import{NavController, LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  todo: categoriaI={
    categoria:'',
    id:0
  };
  todoIdd = null;

  constructor(
    private route:ActivatedRoute, private nav:NavController,
    private todoService:TodoService, private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.todoIdd = this.route.snapshot.params['idd'];
    if (this.todoIdd){
      this.loadTodo();
    }
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();
    this.todoService.getTodo(this.todoIdd).subscribe(res => {  loading.dismiss();
    this.todo = res;  
    })
  }

  async saveTodo(){
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
      if(this.todoIdd){
        //update
        this.todoService.updateTodo(this.todo, this.todoIdd).then(() => {
          loading.dismiss();
          this.nav.navigateForward('/rproductos');
        });
      } 
      else{
        //add new
        this.todoService.addTodo(this.todo).then(() => {
          loading.dismiss();
          this.nav.navigateForward('/rproductos');
        });
      }
  }

  onRemove(iddTodo: string){
    this.todoService.removeTodo(iddTodo);
  }
}
