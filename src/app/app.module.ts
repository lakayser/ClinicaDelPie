import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Plantilla/sidebar/sidebar.component';
import { HeaderComponent } from './Plantilla/header/header.component';
import { DashboardComponent } from './Vistas/dashboard/dashboard.component';
import { AgendaComponent } from './Vistas/agenda/agenda.component';
import { AtencionComponent } from './Vistas/atencion/atencion.component';
import { HistorialComponent } from './Vistas/historial/historial.component';
import { LoginComponent } from './Vistas/login/login.component';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './Servicios/token-interceptor.service';
import { CrudUsuariosComponent } from './Vistas/VistasAdmin/crud-usuarios/crud-usuarios.component';
import { ObjToArrayPipe } from './obj-to-array.pipe';
import { FooterComponent } from './Plantilla/footer/footer.component';
import { CalendarioModule } from './Vistas/calendario/calendario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { DetallesComponent } from './Vistas/detalles/detalles.component';
import { FilterPipe } from './filter.pipe';
import {TabViewModule} from 'primeng/tabview';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    AgendaComponent,
    AtencionComponent,
    HistorialComponent,
    LoginComponent,
    CrudUsuariosComponent,
    ObjToArrayPipe,
    FooterComponent,
    DetallesComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    CalendarioModule,
    ButtonModule,
    SidebarModule,
    TableModule,
    ToolbarModule,
    ReactiveFormsModule,
    TabViewModule
   
  ],
  providers:
    [ AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
