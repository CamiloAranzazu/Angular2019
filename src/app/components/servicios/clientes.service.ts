import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { ClienteI } from 'app/interfaces/cliente.interface';
import 'rxjs/Rx';

@Injectable()
export class ClientesService {

  getClientesURL: string = 'https://clientes-8cd80.firebaseio.com/Cliente.json';
  getClienteURL: string = 'https://clientes-8cd80.firebaseio.com/Cliente';
  postClienteURL: string = 'https://clientes-8cd80.firebaseio.com/Cliente.json';
  putClienteURL: string = 'https://clientes-8cd80.firebaseio.com/Cliente';
  deleteClienteURL: string = 'https://clientes-8cd80.firebaseio.com/Cliente';

  constructor( private http: Http) { }

  insertarNuevoCliente( cliente: ClienteI) {
    let body = JSON.stringify( cliente );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.postClienteURL, body, { headers })
           .map( res => {
              console.log( res.json() );
              return res.json();
           });
  }

  actualizarCliente( cliente: ClienteI, Key$: string) {
    let body = JSON.stringify( cliente );
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let urlput = `${ this.putClienteURL }/${ Key$ }.json`;
    return this.http.put( urlput, body, { headers })
           .map( res => {
              console.log( res.json() );
              return res.json();
           });
  }

  getCliente( key$: string) {
    let url = `${ this.getClienteURL }/${key$}.json`;
    return this.http.get( url )
    .map( res => res.json());
  }

  getClientes( ) {
    return this.http.get( this.getClientesURL )
    .map( res => res.json());
  }

  eliminarCliente( key$: string) {
    let urlDelete = `${ this.deleteClienteURL }/${ key$ }.json`;
    return this.http.delete(urlDelete )
     .map( res => res.json());
  }

}
