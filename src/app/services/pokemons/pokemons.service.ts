import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemon(id: number) {
    (this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).forEach(data => { console.log(data); }));
  }
}
