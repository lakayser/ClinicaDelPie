import { Component } from '@angular/core';

@Component({
  selector: 'app-dias-calendario',
  templateUrl: './dias-calendario.component.html',
  styles: [
    `
      .col {
        background-color: #9FABEE;
        border-radius: 0.4rem;
        font-size: 0.90rem;
        box-shadow: 0rem 0.1rem 0.1rem #303030;
      }
    `
  ]
})
export class DiasCalendarioComponent {
  dias: string[] = [
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes'
  ];
}
