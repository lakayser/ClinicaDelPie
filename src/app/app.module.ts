import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    CalendarioModule,
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
