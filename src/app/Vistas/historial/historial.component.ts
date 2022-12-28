import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AtencionService } from 'src/app/Servicios/atencion.service';
import { Atencion } from 'src/app/Modelos/atencion';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/Servicios/paciente.service';
import { Paciente } from 'src/app/Modelos/paciente';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  filterPost= '';
  atencion: Atencion[] = [];

  paciente: Paciente[];

  constructor(private router: Router, public atencionService:AtencionService, public pacienteService:PacienteService) { }

  ngOnInit(): void {
    this.getAtenciones();
    this.getPaciente();

  }

 

  getAtenciones(){
    this.atencionService.getAtencion().subscribe((res)=>{
     this.atencion=res;
    })
  }
  goDetalles(paciente:Paciente){
    console.log(paciente._id)
    this.router.navigate(['/detalles', paciente._id])

  }
  getPaciente(){
    this.pacienteService.getPaciente().subscribe((res)=>{
      this.paciente=res;
      console.log(res)
    })
  }
  addPaciente(form:NgForm){
    this.pacienteService.createPaciente(form.value).subscribe((res)=>{
      console.log(res)
      form.reset();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res,
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
      })
      window.location.reload()
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error,
        timer: 2500
      });
    }

    )
  }
}
