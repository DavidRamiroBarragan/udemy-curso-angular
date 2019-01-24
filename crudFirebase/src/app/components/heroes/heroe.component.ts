import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interface/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component( {
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
} )
export class HeroeComponent implements OnInit {
  heroe: Heroe = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  };

  nuevo = false;
  id: string;

  constructor( private _heroeService: HeroesService,
               private router: Router, private activateRoute: ActivatedRoute ) {
    this.activateRoute.params.subscribe(
      params => {
        this.id = params[ 'id' ];
        if ( this.id !== 'nuevo' ) {
          this._heroeService.getHeroe( this.id ).subscribe( heroe => this.heroe = heroe );
        }
      }
    );
    console.log( this.id );
  }

  ngOnInit() {
  }

  guardar() {

    if ( this.id === 'nuevo' ) {
      this._heroeService.nuevoHeroe( this.heroe ).subscribe(
        data => {
          this.router.navigate( [ '/heroe', data[ 'name' ] ] );
        },
        error => {
          console.error( error );
        }
      );
    } else {
      this._heroeService.actualizarHeroe( this.heroe, this.id ).subscribe(
        data => {
          console.log( data );
        },
        error => {
          console.error( error );
        }
      );
    }
  }

  agregarNuevoHeroe( heroe: NgForm ) {
    this.router.navigate( [ '/heroe', 'nuevo' ] );
    heroe.reset( {
      casa: 'Marvel'
    } );
  }

}
