import { Component, OnInit } from '@angular/core';
import { AtencionService } from 'src/app/Servicios/atencion.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.css']
})
export class AtencionComponent implements OnInit {

  atencionformu = new UntypedFormGroup({
    nombre: new UntypedFormControl(''),
    Edad: new UntypedFormControl(''),
    numeroContacto: new UntypedFormControl(''),
    numeroEmergencia: new UntypedFormControl(''),
    rut: new UntypedFormControl(''),
    enfermedadR: new UntypedFormControl(''),
    observaciones: new UntypedFormControl(''),
    tratamiento: new UntypedFormControl('')
  })


  constructor(private route: Router, private router: Router, private atencionService: AtencionService) { }

  ngOnInit(): void {
  }
  submit(){
    this.atencionService.postAtencion(this.atencionformu.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/inicio'])
    })
  }
  

}
