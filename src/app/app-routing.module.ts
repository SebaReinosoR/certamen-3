import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaComponent } from './componentes/lista/lista.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"lista",component:ListaComponent},
  {path:"actualizar/:id",component:ActualizarComponent},
  {path:"inicio",component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
