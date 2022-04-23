import { Component ,OnInit} from '@angular/core';
import {POKEMONS} from "./mock-pokemons";
import {Pokemon} from "./pokemon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'pokemons';
  pokemonList:Pokemon[]=POKEMONS;
  pokemonSlected: Pokemon|undefined ;

  ngOnInit() {
    console.log(this.pokemonList);


  }
  selectPokemon(pokemonId :string){
    const pokemon:Pokemon|undefined =this.pokemonList.find(pokemon=>pokemon.id ==+pokemonId)
    if (pokemon){
      console.log(`vous avez selectionner le pokemon ${pokemon.name}`)
      this.pokemonSlected=pokemon
    }
    else {
      console.log(`le pokemon selectionner n'hesiste pas`)
      this.pokemonSlected=pokemon
    }

  }
}
