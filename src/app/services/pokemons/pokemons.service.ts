import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number, listOfPokemons: Pokemon[], loopIndex: number) {
    (this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).forEach((data: any) => {
      listOfPokemons[loopIndex].image = data.sprites.front_default;
      data.types.forEach((types: any) => {
        listOfPokemons[loopIndex].types.push(types.type.name);
      })      
    }));
  }
}
