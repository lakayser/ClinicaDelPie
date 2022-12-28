import { Component, OnInit } from '@angular/core';
import { AtencionService } from 'src/app/Servicios/atencion.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { PacienteService } from 'src/app/Servicios/paciente.service';
import { Paciente } from 'src/app/Modelos/paciente';
import { Atencion } from 'src/app/Modelos/atencion';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.css']
})
export class AtencionComponent implements OnInit {

  cosa: any={};

  atencionformu = new UntypedFormGroup({
    observaciones: new UntypedFormControl(''),
    tratamiento: new UntypedFormControl(''),
    procedimiento: new UntypedFormControl('')
  })

  paciente: Paciente[]
  
  atencion:Atencion[]

  constructor(private route:ActivatedRoute, private router: Router, private atencionService: AtencionService, public pacienteService:PacienteService) { }

  ngOnInit(): void {
    let BN = this.route.snapshot.paramMap.get('id');
    this.cosa = BN;
     console.log(this.cosa)
    
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.getID(id);
      // console.log(this.getID(id))
     
    });
  }

  submit(){
    this.atencionService.postAtencion(this.cosa, this.atencionformu.value).subscribe((res)=>{
      console.log(res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res,
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,

        
      }).then(() => {
        this.router.navigate(['/detalles', this.cosa]) });

    },
    err => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error.message,
        timer: 2500
      });
    }
      )

  }
  getID(id:any){
    this.pacienteService.getPacienteID(id).subscribe((res)=>{
      this.paciente=res;
      // console.log('hola',res)
    })
  }
  

}
