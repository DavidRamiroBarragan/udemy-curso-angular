import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
  }

  ingresar(proveedor: string){
    this._chatService.login(proveedor);
  }

  salir(){

  }
}
