import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component( {
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
} )
export class HeroesComponent implements OnInit {
  heroes: any[] = [];

  constructor( private _heroesService: HeroesService ) {
    this._heroesService.getHeroes().subscribe( res => this.heroes = res );
  }

  ngOnInit() {
  }

  eliminarHeroe( key$: string ) {
    this._heroesService.borrarHeroe( key$ ).subscribe(
      res => {
        if ( res ) {
          console.error( res );
        } else {
          delete  this.heroes[key$]; // Eliminamos el heroe del array
        }
      }
    );
  }
}
