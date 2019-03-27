import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'app/components/servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {
  cargandoInformacion: boolean = true;
  clientes: any [] = [];

  constructor( private router: Router,
                private _clientesService: ClientesService) {
  this._clientesService.getClientes()
    .subscribe( data => {
      setTimeout(() => {
        this.cargandoInformacion = false;
        this.clientes = data;
      }, 3000);
    });
}

  ngOnInit() {
  }

  crearUsuario() {
    this.router.navigate(['/cliente', 'nuevoUsuario']);
  }

  EliminarCiente( key$: string) {
    this._clientesService.eliminarCliente(key$)
      .subscribe( res => {
        if (res) {
          console.log(res);
        }else {
          delete this.clientes[key$];
        }
       });
  }

}
