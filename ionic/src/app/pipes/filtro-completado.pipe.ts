import {Pipe, PipeTransform} from '@angular/core';
import {ListaModel} from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false,
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: ListaModel[], completada: boolean = true): ListaModel[] {
    return listas.filter(lista => lista.finished === completada);
  }

}
