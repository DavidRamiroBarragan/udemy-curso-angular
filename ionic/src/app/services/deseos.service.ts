import {Injectable} from '@angular/core';
import {ListaModel} from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class DeseosService {

  public listas: ListaModel [] = [];

  constructor() {
    this.cargarStorage();
  }

  public crearLista(title: string): number {
    const nuevaLista = new ListaModel(title);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  borrarLista(lista: ListaModel) {
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
    this.guardarStorage();
  }

  public obtenerLista(id: number | string): ListaModel {
    let listaId;
    if (typeof id === 'string') {
      listaId = Number(id);
    } else {
      listaId = id;
    }

    return this.listas.find(listaData => listaData.id === listaId);
  }

  guardarStorage(): void {
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(): void {
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    }
  }

}
