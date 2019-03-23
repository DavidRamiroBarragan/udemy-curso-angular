import {ListaItemModel} from './lista-item.model';

export class ListaModel {
  id: number;
  title: string;
  createAt: Date;
  finishedAt: Date;
  finished: boolean;
  items: ListaItemModel [];

  constructor(title: string) {
    this.id = new Date().getTime();
    this.title = title;
    this.createAt = new Date();
    this.finished = false;
    this.items = [];
  }
}
