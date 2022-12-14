import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AtencionService } from 'src/app/Servicios/atencion.service';
import { Atencion } from 'src/app/Modelos/atencion';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  atencio: Atencion[];
  constructor(private router: Router, public atencionService:AtencionService) { }

  ngOnInit(): void {
    this.getAtenciones();
  }

  getAtenciones(){
    this.atencionService.getAtencion().subscribe((res)=>{
      this.atencionService.atencion = res;
      console.log(res);
    })
  }
  goDetalles(atencion:Atencion){
    console.log(atencion._id)
    this.router.navigate(['/detalles', atencion._id])

  }
}
