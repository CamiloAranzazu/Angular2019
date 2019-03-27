import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesSevice } from '../servicios/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activateRouter: ActivatedRoute,
               private _heroeService: HeroesSevice
    ) {
    this.activateRouter.params.subscribe(
      parametros => {
        this.heroe = this._heroeService.getHeroe(parametros['id']);
        console.log(this.heroe);
      }
    );
  }

}
