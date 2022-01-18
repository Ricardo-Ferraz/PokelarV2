import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';
import { PokemonComponent } from './pokemon.component';
import { AuthGuard } from '../guards/auth.guard';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

const routes: Routes = [
  {path:'pokemon', component: PokemonComponent, children: [
    {path: ':id', component: PokemonDetalheComponent},
    {path: ':id/editar', component: PokemonFormComponent}
  ], canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
