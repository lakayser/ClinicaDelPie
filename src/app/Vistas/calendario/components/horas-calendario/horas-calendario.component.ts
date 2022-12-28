import { Component, Input, OnInit } from '@angular/core';
import { Horas } from '../../interface/horas.interface';
import { TomarhoraService } from '../../../../Servicios/tomarhora.service';
import { NgForm } from '@angular/forms';

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
      .cursor-dialog:hover{
        cursor:pointer;
      }
    `
  ]
})
export class HorasCalendarioComponent implements OnInit{
  @Input() horas: Horas[] = [];
  @Input() semana: number;

  display: boolean = false;
  display2: boolean = false;

  horaId: string;

  nombre: string | null ;
  numero: string | null;
  rut: string = '' ;
  rut2: string | null;
  

  constructor(private tomarHora: TomarhoraService){}
  
  ngOnInit(): void {
    
  }
  showDialog() {
    this.display = true;
  }
  showDialog2() {
    this.display2 = true;
  }
  obtenerId(id: string) {

    this.horaId = id;
    console.log(id)
  }
  obtenerRut(id:string){
    this.tomarHora.getHoraTomada()
      .subscribe(hora=>{
       hora.map(a=>{
        a.horaTomada.map(b=>{
          if (b._id === id) {
            console.log(a.rut)
            this.rut2 = a.rut;
            this.nombre= a.nombre;
            this.numero = a.numero;
          }
        })
       })
      })
  }
  posthoraReservada(form:NgForm){
    this.tomarHora.createHoraTomada(this.horaId,form.value)
      .subscribe(form=>{
        console.log(form)
        this.display = false;

      })
  }
}

