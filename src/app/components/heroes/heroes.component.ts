import { Component, OnInit } from '@angular/core';
import { HeroesSevice, HeroesI } from '../servicios/heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: HeroesI [] = [];

  constructor( private _heroesSevice: HeroesSevice,
    ) { }

  ngOnInit() {
    this.heroes = this._heroesSevice.getHeroes();
  }

}
