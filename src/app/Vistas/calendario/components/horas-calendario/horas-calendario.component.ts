import { Component, Input } from '@angular/core';
import { Horas } from '../../interface/horas.interface';

@Component({
  selector: 'app-horas-calendario',
  templateUrl: './horas-calendario.component.html',
  styles: [
    `
      .dias-disp {
        background-color: #33CC86;
        border-radius: 0.4rem;
        box-shadow: 0rem 0.1rem 0.1rem #303030;
      }
      .dias-noDisp {
        background-color: #E4E4E4;
        border-radius: 0.4rem;
        box-shadow: 0rem 0.1rem 0.1rem #303030;
      }
    `
  ]
})
export class HorasCalendarioComponent {
  @Input() horas: Horas[] = [];
  @Input() semana: number;
}
