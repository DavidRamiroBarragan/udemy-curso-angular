import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

const app_routes: Routes  = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(app_routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
