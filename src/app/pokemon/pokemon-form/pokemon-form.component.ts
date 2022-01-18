import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

import { pokemon } from './../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit, OnDestroy {

  pokemon?: pokemon | null;
  inscricao: Subscription= new Subscription();

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.inscricao= this.route.params.subscribe((params: any) => {
      let id= params['id']

      this.pokemon= this.dataService.getPokemon(id);
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
