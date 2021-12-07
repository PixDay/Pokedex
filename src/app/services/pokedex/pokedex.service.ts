import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Pokemon } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getPokedex(region: number, listOfPokemon: Pokemon[]) 
  {
    this.http.get('https://pokeapi.co/api/v2/pokedex/' + region).forEach((data: any) => { 
      console.log(data);
      let id = 1;
      data.pokemon_entries.forEach((pokemonData: any) => {
        console.log(pokemonData.pokemon_species.name);
        let pokemon: Pokemon = {
          name: pokemonData.pokemon_species.name,
          image: "",
          id: id,
          types: [],
          default_competencies: []
        };
        id++;
        listOfPokemon.push(pokemon);
      });
    });
  }
}
