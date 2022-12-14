import { Component, OnInit } from '@angular/core';
import { Horas } from '../../interface/horas.interface';
import { HorasService } from '../../services/horas.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styles: [
  ]
})
export class CalendarioComponent implements OnInit {
  horas   : Horas[] = [];
  fecha   : Date = new Date();
  semana  : number = this.numeroSemana( this.fecha );
  fechaApp: Date = new Date();

  constructor( private horasService: HorasService ) {}

  ngOnInit(): void {
    this.horasService.getHoras()
      .subscribe( horas =>  {
        this.horas = horas;
        horas.map( hora => {
          if( hora.semana === this.semana ) {
            if( hora.dia === 'domingo' ) {
              this.fechaApp = hora.fecha;
            }
          }
        });
        console.log( this.horas );
      });
  }
  

  numeroSemana (fecha: any) {
    const dia_en_mili_segundos = 1000 * 60 * 60 * 24,
      dias_que_tiene_una_semana = 7,
      jueves = 4
    fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()))
    let dia_de_la_semana = fecha.getUTCDay()
    if (dia_de_la_semana === 0) {
      dia_de_la_semana = 7
    }
    fecha.setUTCDate(fecha.getUTCDate() - dia_de_la_semana + jueves)
    const inicio_de_ano: any = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1))
    const diferencia_de_fechas_en_milisegundos = fecha - inicio_de_ano
    return Math.ceil(((diferencia_de_fechas_en_milisegundos / dia_en_mili_segundos) + 1) / dias_que_tiene_una_semana)
  }
}
