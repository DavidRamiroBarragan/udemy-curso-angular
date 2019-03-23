export class ListaItemModel {
  description: string;
  state: boolean;

  constructor(description: string) {
    this.description = description;
    this.state = false;
  }
}
