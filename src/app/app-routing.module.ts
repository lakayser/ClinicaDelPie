import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Vistas/login/login.component';
import { DashboardComponent } from './Vistas/dashboard/dashboard.component';
import { AgendaComponent } from './Vistas/agenda/agenda.component';
import { AtencionComponent } from './Vistas/atencion/atencion.component';
import { HistorialComponent } from './Vistas/historial/historial.component';
import { CrudUsuariosComponent } from './Vistas/VistasAdmin/crud-usuarios/crud-usuarios.component';
import { CalendarioComponent } from './Vistas/calendario/pages/calendario/calendario.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'inicio', component: DashboardComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'atencion', component: AtencionComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'Admin', component:CrudUsuariosComponent},

  { path: '**'                 , redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
