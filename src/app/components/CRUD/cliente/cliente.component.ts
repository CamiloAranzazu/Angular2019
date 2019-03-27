import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteI } from 'app/interfaces/cliente.interface';
import { ClientesService } from 'app/components/servicios/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent  {

  cliente: ClienteI = {
    Nombre: '',
    Genero: 'Masculino',
    Edad: 0,
  };
  parametroEsperado: string;

  constructor( private _clienteServicio: ClientesService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) {

  this.activatedRoute.params
      .subscribe( parametros => {
        this.parametroEsperado = parametros['id']
        if(this.parametroEsperado !== 'nuevoUsuario') {
          this._clienteServicio.getCliente( this.parametroEsperado)
          .subscribe( clientes => this.cliente = clientes);
        }
    });
  }

  guardar() {
    console.log(this.cliente);

    if (this.parametroEsperado === 'nuevoUsuario') {
      this._clienteServicio.insertarNuevoCliente( this.cliente)
      .subscribe( data => {
        this.router.navigate(['/cliente', data.name]);
      } , error => console.log(error));
    }else {
      this._clienteServicio.actualizarCliente( this.cliente, this.parametroEsperado)
      .subscribe( data => {
      } , error => console.log(error));
    }

  }


  nuevoHeroe( forma: NgForm) {
    this.router.navigate(['/cliente', 'nuevoUsuario']);
    forma.reset({
      Genero: 'Masculino',
    });
  }



}


