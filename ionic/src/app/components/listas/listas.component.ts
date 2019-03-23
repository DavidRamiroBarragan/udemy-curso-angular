import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {ListaModel} from '../../models/lista.model';
import {Router} from '@angular/router';
import {AlertController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList) lista: IonList;
  @Input() terminada = true;

  constructor(
      public _deseosService: DeseosService,
      private router: Router,
      private _alertController: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista: ListaModel) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrar(lista: ListaModel) {
    this._deseosService.borrarLista(lista);
  }

  async editar(item: ListaModel) {
    const alert = await this._alertController.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: `${item.title}`,
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          },
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if (data.titulo.lenght === 0) {
              return;
            }
            item.title = data.titulo;
            this._deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          },
        },
      ],
    });

    await alert.present();
  }
}
