import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'keys',
  pure: false //para que esté pendiente de los cambios que hace angular
} )
export class KeysPipe implements PipeTransform {

  transform( value: any ): any {
    let keys = [];

    for ( const key in value ) {
      keys.push( key );
    }
    return keys;
  }

}
