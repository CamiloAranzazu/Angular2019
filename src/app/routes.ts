import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio/inicio.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroesComponent } from './components/buscar-heroes/buscar-heroes.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ClienteComponent } from './components/CRUD/cliente/cliente.component';
import { ClientesComponent } from './components/CRUD/clientes/clientes.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscarHeroe/:termino', component: BuscarHeroesComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'cliente/:id', component: ClienteComponent },
    { path: '**', component: InicioComponent },
];
export const RUTAS = RouterModule.forRoot(APP_ROUTES);
