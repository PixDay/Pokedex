import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonsService } from '../pokemons/pokemons.service';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient, public pokemonService: PokemonsService) { }

  getPokedex(region: number, listOfPokemon: Pokemon[]) 
  {
    this.http.get('https://pokeapi.co/api/v2/pokedex/' + region).forEach((data: any) => { 
      let id = 1;
      data.pokemon_entries.forEach((pokemonData: any) => {
        let pokemon: Pokemon = {
          name: pokemonData.pokemon_species.name,
          image: "",
          id: id,
          pokemonId: (pokemonData.pokemon_species.url.match(/(\d+)(?!.*\d)/)[0]),
          types: [],
          default_competencies: []
        };
        id++;
        listOfPokemon.push(pokemon);
      });
      id = 0;
      listOfPokemon.forEach(pokemon => {
        this.pokemonService.getPokemon(pokemon.pokemonId, listOfPokemon, id);
        id++;
      })
    }); 
  }
}
