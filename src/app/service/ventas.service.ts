import { Injectable } from '@angular/core';

import{AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import{observable, Observable} from 'rxjs';
import{map} from 'rxjs/operators';
import{ventaI} from '../models/ventas.interface';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private ventasCollection : AngularFirestoreCollection<ventaI>;
  private ventas: Observable<ventaI[]>;

  constructor(db:AngularFirestore) { 

    this.ventasCollection = db.collection<ventaI>('ventas');
    this.ventas = this.ventasCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const idd = a.payload.doc.id;
        return { idd, ...data };
      });
    }
    ));

  } 

  getTodos(){
    return this.ventas
  }

  getTodo(idd:string){
     return this.ventasCollection.doc<ventaI>(idd).valueChanges();
  }

  updateTodo(todo:ventaI, idd:string){
     return this.ventasCollection.doc(idd).update(todo);
  }

  addTodo( todo: ventaI){
    return this.ventasCollection.add(todo);
  }

  removeTodo(idd:string){
     return this.ventasCollection.doc(idd).delete();
  }
}
