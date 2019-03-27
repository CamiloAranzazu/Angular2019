import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { RUTAS } from './routes';

// Servicios
import { HeroesSevice } from './components/servicios/heroe.service';
import { ClientesService } from './components/servicios/clientes.service';

// Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroesComponent } from './components/buscar-heroes/buscar-heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ClientesComponent } from './components/CRUD/clientes/clientes.component';
import { ClienteComponent } from './components/CRUD/cliente/cliente.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarHeroesComponent,
    HeroeTarjetaComponent,
    PipesComponent,
    ClientesComponent,
    ClienteComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RUTAS
  ],
  providers: [
    HeroesSevice,
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
