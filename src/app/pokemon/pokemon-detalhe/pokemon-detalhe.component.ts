import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.css']
})
export class PokemonDetalheComponent implements OnInit, OnDestroy {

  pokemon?: pokemon | null;
  inscricao: Subscription= new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  ngOnInit(): void {
    this.inscricao= this.route.params.subscribe((params: any) => {
      let id= params['id']

      this.pokemon= this.dataService.getPokemon(id);
    })
  }

  onEditPokemon(){
    this.router.navigate(['/pokemon', this.pokemon?.id, 'editar'])
  }
}
