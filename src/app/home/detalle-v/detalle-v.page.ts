import { Component, OnInit } from '@angular/core';

import{ventaI}from '../../models/ventas.interface';
import{VentasService} from '../../service/ventas.service';
import{ActivatedRoute} from '@angular/router';
import{NavController, LoadingController} from '@ionic/angular';
@Component({
  selector: 'app-detalle-v',
  templateUrl: './detalle-v.page.html',
  styleUrls: ['./detalle-v.page.scss'],

})
export class DetalleVPage implements OnInit {
  
  ventas: ventaI={
    nombrep:'',
    id:null,
    cantidad:null,
    total:null,
    fecha:''
  };
  ventasIdd = null;

  constructor( 
    private route:ActivatedRoute, private nav:NavController,
    private ventasService:VentasService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.ventasIdd = this.route.snapshot.params['idd'];
    if (this.ventasIdd){
      this.loadTodo();
    }
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();
    this.ventasService.getTodo(this.ventasIdd).subscribe(res => {  loading.dismiss();
    this.ventas = res;  
    })
  }

  async saveTodo(){
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
      if(this.ventasIdd){
        //update
        this.ventasService.updateTodo(this.ventas, this.ventasIdd).then(() => {
          loading.dismiss();
          this.nav.navigateForward('/ventas');
        });
      } 
      else{
        //add new
        this.ventasService.addTodo(this.ventas).then(() => {
          loading.dismiss();
          this.nav.navigateForward('/ventas');
        });
      }
  }

  onRemove(iddTodo: string){
    this.ventasService.removeTodo(iddTodo);
  }

}
