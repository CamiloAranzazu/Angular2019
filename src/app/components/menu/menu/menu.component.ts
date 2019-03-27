import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(valorHeroe: any) {
     console.log(valorHeroe);
     this.router.navigate(['/buscarHeroe', valorHeroe]);
  }

}
