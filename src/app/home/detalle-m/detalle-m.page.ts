import { Component, OnInit } from '@angular/core';

import{mantenimientoI}from '../../models/mantenimiento.interface';
import{TodomService} from '../../service/todom.service';
import{ActivatedRoute} from '@angular/router';
import{NavController, LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-detalle-m',
  templateUrl: './detalle-m.page.html',
  styleUrls: ['./detalle-m.page.scss'],
})
export class DetalleMPage implements OnInit {

  todom: mantenimientoI={
    categoria:'',
    id:0
  };
  todomIdd = null; 

  constructor(
    private route:ActivatedRoute, private nav:NavController,
    private todoService:TodomService, private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.todomIdd = this.route.snapshot.params['idd'];
    if (this.todomIdd){
      this.loadTodo();
    }
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();
    this.todoService.getTodo(this.todomIdd).subscribe(res => {  loading.dismiss();
    this.todom = res;  
    })
  }
 
  async saveTodo(){
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
      if(this.todomIdd){
        //update
        this.todoService.updateTodo(this.todom, this.todomIdd).then(() => {
          loading.dismiss();
          this.nav.navigateForward('/mantenimientos');
        });
      } 
      else{
        //add new
        this.todoService.addTodo(this.todom).then(() => {
          loading.dismiss();
          this.nav.navigateForward('/mantenimientos');
        });
      }
  }

  onRemove(iddTodo: string){
    this.todoService.removeTodo(iddTodo);
  }

}
