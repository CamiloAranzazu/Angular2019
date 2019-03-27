import { Component } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
})
export class PipesComponent {

  nombre = 'Camilo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pi = Math.PI;
  porcentaje = 0.25;
  json = {
    nombre: 'camilo',
    apellido: 'Aranzazu',
    edad: '23',
    direccion: {
      casa: 'SI',
      casaDireccion: 'cll 35 a n 9-22 sur'
    }
  };

  promesa = new Promise((bien, mal) => {
    setTimeout(() => {
      bien('Perfeto');
    }, 3500);
  });

  pipesPersonalisados = 'caMilo AranzazU peREz';

}
