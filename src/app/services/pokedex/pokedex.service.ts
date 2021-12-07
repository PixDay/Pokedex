import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }

  getPokedex(region: number) {
    (this.http.get('https://pokeapi.co/api/v2/pokedex/' + region).forEach(data => { console.log(data) }));
  }
}
