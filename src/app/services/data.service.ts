import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { pokemon } from '../pokemon/pokemon';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private array: pokemon[]= [];

  constructor(private http: HttpClient) {
    console.log("Construiu")
    this.fillArray();
   }

  getArray(){
    return this.array;
  }

  getPokemon(id: string){
    for(let i=0; i < this.array.length; i++){
      if(this.array[i].id == id) {
        return this.array[i]
      }
    }
    return null;
  }

  private getData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  fillArray(){
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=900').subscribe((response:any) => {
      response.results.forEach((element: any) => {
        this.getData(element.name).subscribe((unic: any) => {
          var type2=  unic.types[1]?.type.name;
          if(type2 === undefined){
            this.array.push({
              id: unic.id,
              nome: unic.name,
              frontSprite: unic.sprites.front_default,
              backSprite: unic.sprites.back_default,
              hp: unic.stats[0].base_stat,
              atk: unic.stats[1].base_stat,
              def: unic.stats[2].base_stat,
              spAtk: unic.stats[3].base_stat,
              spDef: unic.stats[4].base_stat,
              spd: unic.stats[5].base_stat,
              type1: unic.types[0].type.name,
              }
            )
          }
          else{
            this.array.push({
              id: unic.id,
              nome: unic.name,
              frontSprite: unic.sprites.front_default,
              backSprite: unic.sprites.back_default,
              hp: unic.stats[0].base_stat,
              atk: unic.stats[1].base_stat,
              def: unic.stats[2].base_stat,
              spAtk: unic.stats[3].base_stat,
              spDef: unic.stats[4].base_stat,
              spd: unic.stats[5].base_stat,
              type1: unic.types[0].type.name,
              type2: unic.types[1].type.name
              }
            )
          }
        })
      });
    })
  }

}
