import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { HoramasivaService } from '../../Servicios/horamasiva.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor( public horasmasivasService: HoramasivaService) { }

  ngOnInit(): void {
    this.getCargaMasiva();
  }

  addHorasCancha(form: NgForm) {
    this.horasmasivasService.createHorasMasivas(form.value).subscribe((res) => {

      console.log(res);
      form.reset();

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: res,
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
      })
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.error,
        timer: 2500
      });
    })
  }

  getCargaMasiva(){
    this.horasmasivasService.getCargaMasiva().subscribe((res)=>{
      this.horasmasivasService.cargamasi =res ;
      console.log(res);
      
    })
  }
}
