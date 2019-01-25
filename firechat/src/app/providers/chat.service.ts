import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MensajeInterface } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable( {
  providedIn: 'root'
} )
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<MensajeInterface>;

  public chats: MensajeInterface[] = [];

  public usuario: any = {};

  constructor( private afs: AngularFirestore, public afAuth: AngularFireAuth ) {
    this.afAuth.authState.subscribe( user => {
      if ( !user ) {
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    } );
  }

  login( proveedor: string ) {
    this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider() );
  }

  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<MensajeInterface>( 'chats', ref => ref.orderBy( 'date', 'desc' ).limit( 5 ) );
    return this.itemsCollection.valueChanges()
      .pipe(
        map( ( data: MensajeInterface[] ) => {
          this.chats = [];
          for ( const mensaje of data ) {
            this.chats.unshift( mensaje ); // Meter el mensaje en la primera posición
          }
        } )
      );
  }

  agregarMensaje( text: string ) {
    // Falta el uid
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: text,
      date: new Date().getTime(),
      uid: this.usuario.uid
    };
    return this.itemsCollection.add( mensaje );
  }
}
