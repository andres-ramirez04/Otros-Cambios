import { Injectable } from '@angular/core';

import{AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import{observable, Observable} from 'rxjs';
import{map} from 'rxjs/operators';
import{mantenimientoI} from '../models/mantenimiento.interface';

@Injectable({
  providedIn: 'root'
})
export class TodomService {

  private todosmCollection : AngularFirestoreCollection<mantenimientoI>;
  private todosm: Observable<mantenimientoI[]>;

  constructor(db:AngularFirestore) { 
    this.todosmCollection = db.collection<mantenimientoI>('todosm');
    this.todosm = this.todosmCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const idd = a.payload.doc.id;
        return { idd, ...data };
      });
    }
    ));
  }

  getTodos(){
    return this.todosm
  }

  getTodo(idd:string){
     return this.todosmCollection.doc<mantenimientoI>(idd).valueChanges();
  }

  updateTodo(todo:mantenimientoI, idd:string){
     return this.todosmCollection.doc(idd).update(todo);
  }

  addTodo( todo: mantenimientoI){
    return this.todosmCollection.add(todo);
  }

  removeTodo(idd:string){
     return this.todosmCollection.doc(idd).delete();
  }

}
