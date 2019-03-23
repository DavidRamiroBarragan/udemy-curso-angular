import {Component, OnInit, ViewChild} from '@angular/core';
import {DeseosService} from '../../services/deseos.service';
import {ActivatedRoute} from '@angular/router';
import {ListaModel} from '../../models/lista.model';
import {ListaItemModel} from '../../models/lista-item.model';
import {AlertController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  @ViewChild('items') itemList: IonList;
  lista: ListaModel;
  nombreItem = '';

  constructor(
      private _deseosService: DeseosService,
      private route: ActivatedRoute,
      private _alertController: AlertController) { }

  ngOnInit() {
    const listaId = this.route.snapshot.paramMap.get('id');
    this.lista = this._deseosService.obtenerLista(listaId);
  }

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItemModel(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = '';
    this._deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItemModel): void {
    const pendientes: number = this.lista.items.filter(itemData => !itemData.state).length;
    if (pendientes === 0) {
      this.lista.finishedAt = new Date();
      this.lista.finished = true;
    } else {
      this.lista.finished = null;
      this.lista.finished = false;
    }
    this._deseosService.guardarStorage();
  }

  borrar(item: number): void {
    this.lista.items.splice(item, 1);
    this._deseosService.guardarStorage();
  }

  async editar(item: ListaItemModel) {
    const alert = await this._alertController.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: `${item.description}`,
          placeholder: 'Nombre de la lista',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.itemList.closeSlidingItems();
          },
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            if (data.titulo.lenght === 0) {
              return;
            }
            item.description = data.titulo;
            this._deseosService.guardarStorage();
            this.itemList.closeSlidingItems();
          },
        },
      ],
    });

    await alert.present();
  }
}
