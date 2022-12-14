import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atencion } from 'src/app/Modelos/atencion';
import { AtencionService } from 'src/app/Servicios/atencion.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{
  cosa: any={};

  Reserva: Atencion[]
constructor(private router: Router,private route:ActivatedRoute,public atencionService:AtencionService){}


ngOnInit(): void {
  let BN = this.route.snapshot.paramMap.get('id');
    this.cosa = BN;
    console.log(this.cosa)
    
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.getID(id);
     
    });
}

getAtenciones(){
  this.atencionService.getAtencion().subscribe((res)=>{
    this.atencionService.atencion = res;
    console.log(res);
  })
}

getID(id:any){
  
  this.atencionService.getAtencionEsp(id).subscribe((res)=>{
    this.Reserva=res;
    console.log(res)
  })
}

}
