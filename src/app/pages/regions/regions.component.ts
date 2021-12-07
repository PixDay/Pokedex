import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';
import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  public regions: string[] = 
  [
    'National',
    'Kanto',
    'Johto',
    'Hoenn',
    'Sinnoh',
    'Unova',
    'Kalos',
    'Alola',
    'Galar'
  ];

  currentRegion: string = "";
  currentRegionIndex: number = 0;

  listOfPokemons: Pokemon[] = [];

  constructor(public pokedexService: PokedexService, public pokemonService: PokemonsService) 
  {
  }

  ngOnInit(): void 
  {
  }

  setRegion(region: string) 
  {
    this.currentRegion = region;
    this.currentRegionIndex = this.regions.indexOf(region) + 1;
    this.pokedexService.getPokedex(this.currentRegionIndex, this.listOfPokemons);
  }

  resetApp()
  {
    this.currentRegion = '';
    this.listOfPokemons = [];
  }
}
