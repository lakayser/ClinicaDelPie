import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atencion } from 'src/app/Modelos/atencion';
import { AtencionService } from 'src/app/Servicios/atencion.service';
import { Paciente } from 'src/app/Modelos/paciente';
import { PacienteService } from 'src/app/Servicios/paciente.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{
  cosa: any={};

  Reserva: Atencion[]
  paciente: Paciente[]
  atencion: Atencion[]

  observaciones: string | null ;

constructor(private router: Router,private route:ActivatedRoute,public atencionService:AtencionService, public pacienteService:PacienteService){}


ngOnInit(): void {
  let BN = this.route.snapshot.paramMap.get('id');
    this.cosa = BN;
    console.log(this.cosa)
    
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.getID(id);
     
    });
    this.listarAtenciones();
}

getAtenciones(){
  this.atencionService.getAtencion().subscribe((res)=>{
    this.atencionService.atencion = res;
    console.log(res);
  })
}

getID(id:any){
  
  this.pacienteService.getPacienteID(id).subscribe((res)=>{
    this.paciente=res;
    console.log(res)
  })
}
goAtencion(paciente:Paciente){
  console.log(paciente._id)
  this.router.navigate(['/atencion', paciente._id])

}
listarAtenciones(){
  this.atencionService.getAtencion().subscribe((res)=>{
    this.atencion=res;
    res.map(a=>{
      if (a.paciente == this.cosa) {
        console.log(a)
        this.observaciones = a.observaciones;
      }
    })
  })
}
}
