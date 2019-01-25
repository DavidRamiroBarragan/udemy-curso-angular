import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';

@Component( {
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: [ './chat.component.css' ]
} )
export class ChatComponent implements OnInit {

  mensaje: string = '';
  elem: any;

  constructor( private _chatService: ChatService ) {
    this._chatService.cargarMensajes().subscribe( () => {
      setTimeout(
    () => {
      () => this.elem.scrollTop = this.elem.scrollHeight;
    }, 20);
  });
  }

  ngOnInit() {
    this.elem = document.getElementById( 'app-mensajes' );
  }

  enviarMensaje() {
    if ( this.mensaje.length !== 0 ) {
      this._chatService.agregarMensaje( this.mensaje ).then(
        () => this.mensaje = '' )
        .catch( ( err ) => console.error( 'Error al enviar ' + err ) );
    }

    return;
  }
}
