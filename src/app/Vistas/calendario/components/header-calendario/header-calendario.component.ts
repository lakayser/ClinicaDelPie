import { Component, Input } from '@angular/core';
import { Horas } from '../../interface/horas.interface';

@Component({
  selector: 'app-header-calendario',
  templateUrl: './header-calendario.component.html',
  styles: [
    `
      i {
        font-size : 1.2rem;
        transition: all 0.5s;
      }
      i:hover {
        cursor   : pointer;
        font-size: 1.4rem;
      }
    `
  ]
})
export class HeaderCalendarioComponent {
  fecha            : Date = new Date();
  anioActual       : number = this.fecha.getFullYear();

  @Input() fechaApp: Date = new Date();
  @Input() semana  : number;

  nextSemana() {
    this.semana += 1;
    if( this.semana > 52 ) {
      this.semana = 1;
    }
  }
  backSemana() {
    this.semana -= 1;
    if( this.semana < 1 ) {
      this.semana = 52;
    }
  }
}
