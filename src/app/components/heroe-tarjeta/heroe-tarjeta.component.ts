import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;
  constructor( private routerService: Router) { }

  ngOnInit() {
  }
  goHeroe() {
    this.routerService.navigate(['/heroe', this.index]);
  }
}