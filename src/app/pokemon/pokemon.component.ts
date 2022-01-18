import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { pokemon } from './pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  array: pokemon[]= [];
  page: number=1;
  pokemonPerPage: number= 50;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.array= this.dataService.getArray();
  }

}
