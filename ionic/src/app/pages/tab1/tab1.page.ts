import {Component} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
      public _deseosService: DeseosService,
      private router: Router,
      private _alertController: AlertController) { }

  async agregarLista() {
    const alert = await this._alertController.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.lenght === 0) {
              return;
            }
            const listaId = this._deseosService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          },
        },
      ],
    });

    await alert.present();
  }

  async editarLista() {
    const alert = await this._alertController.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          // value: `${lista}`;
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.lenght === 0) {
              return;
            }
            const listaId = this._deseosService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          },
        },
      ],
    });

    await alert.present();
  }
}
