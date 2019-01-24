import { Injectable } from '@angular/core';
import { Heroe } from '../components/interface/heroe.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
} )
export class HeroesService {

  HEROES_URL = 'https://heroesapp-26ca1.firebaseio.com/heroes.json';
  HEROE_URL = 'https://heroesapp-26ca1.firebaseio.com/heroes/';

  constructor( private http: HttpClient ) { }

  nuevoHeroe( heroe: Heroe ) {
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders( {
      'content-Type': 'application/json'
    } );

    return this.http.post( this.HEROES_URL, body, { headers: headers } ).pipe(
      map( res => {
        console.log( res );
        return res;
      } ) );
  }

  actualizarHeroe( heroe: Heroe, key$: string ) {
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders( {
      'content-Type': 'application/json'
    } );
    const url = `${ this.HEROE_URL }/${ key$ }.json`;
    return this.http.put( url, body, { headers: headers } ).pipe(
      map( res => {
        console.log( res );
        return res;
      } ) );
  }

  getHeroe( key$: string ) {
    let url = `${ this.HEROE_URL }/${ key$ }.json`;

    return this.http.get( url ).pipe(
      map( res => res )
    );
  }

  getHeroes() {
    return this.http.get( this.HEROES_URL ).pipe(
      map( res => res )
    );
  }

  borrarHeroe(key$: string){
    let url = `${ this.HEROE_URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(
      map(res => res)
    );
  }
}
