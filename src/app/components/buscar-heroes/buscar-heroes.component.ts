import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesSevice } from '../servicios/heroe.service';

@Component({
  selector: 'app-buscar-heroes',
  templateUrl: './buscar-heroes.component.html',
})
export class BuscarHeroesComponent implements OnInit {

  heroes: any [] = [];
  termino: string;
  constructor( private activateRouter: ActivatedRoute,
                private _heroesservice: HeroesSevice,
                private routerService: Router
    ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe( parametros => {
      this.heroes = this._heroesservice.buscarHeroes(parametros['termino']);
      this.termino = parametros['termino'];
      console.log(this.heroes);
    }
    );
  }
  goHeroe( id: number) {
    this.routerService.navigate(['/heroe', id]);
  }

}
