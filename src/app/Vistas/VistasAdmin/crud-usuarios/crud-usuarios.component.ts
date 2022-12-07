import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Servicios/api.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.css']
})
export class CrudUsuariosComponent implements OnInit {

  constructor(private router: Router, public usuariosService: ApiService) { }

  ngOnInit(): void {
    this.getUsuarios();
    this.getrol();
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe((res) => {
        this.usuariosService.users = res;
        console.log(res);
      }); 
  } 
  getrol(){
    this.usuariosService.getRoles().subscribe((res)=>{
      this.usuariosService.roles=res;
      console.log(res)
    })
  }

  addUsuario(form: NgForm) {
      this.usuariosService.crearUsuario(form.value).subscribe((res) => {
        console.log(res); 
        this.getUsuarios();
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
      });
    }
  }
