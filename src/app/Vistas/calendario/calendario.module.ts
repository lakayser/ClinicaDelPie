import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { HeaderCalendarioComponent } from './components/header-calendario/header-calendario.component';

// Cambiar el locale de la app
import localEs from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { DiasCalendarioComponent } from './components/dias-calendario/dias-calendario.component';
import { HorasCalendarioComponent } from './components/horas-calendario/horas-calendario.component';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

registerLocaleData( localEs );


@NgModule({
  declarations: [
    CalendarioComponent,
    HeaderCalendarioComponent,
    DiasCalendarioComponent,
    HorasCalendarioComponent,
    
  ],
  imports: [
    CommonModule,
    DialogModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL' },
  ],
})
export class CalendarioModule { }
