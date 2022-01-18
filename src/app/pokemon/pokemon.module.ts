import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { PokemonComponent } from './pokemon.component';
import { RandomComponent } from '../random/random.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';
import { DataService } from '../services/data.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [
    PokemonComponent,
    RandomComponent,
    PokemonDetalheComponent,
    PokemonFormComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [
    DataService
  ]
})
export class PokemonModule { }
