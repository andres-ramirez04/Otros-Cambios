import { Injectable } from '@angular/core';

import{AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import{observable, Observable} from 'rxjs';
import{map} from 'rxjs/operators';
import{categoriaI} from '../models/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosCollection : AngularFirestoreCollection<categoriaI>;
  private todos: Observable<categoriaI[]>;

  constructor(db:AngularFirestore) {
    this.todosCollection = db.collection<categoriaI>('todos');
    this.todos = this.todosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const idd = a.payload.doc.id;
        return { idd, ...data };
      });
    }
    ));
   }

   getTodos(){
     return this.todos
   }

   getTodo(idd:string){
      return this.todosCollection.doc<categoriaI>(idd).valueChanges();
   }

   updateTodo(todo:categoriaI, idd:string){
      return this.todosCollection.doc(idd).update(todo);
   }

   addTodo( todo: categoriaI){
     return this.todosCollection.add(todo);
   }

   removeTodo(idd:string){
      return this.todosCollection.doc(idd).delete();
   }
}
