import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Servicios/api.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user={
    userName:'',
    password: ''
  }

  constructor(private api:ApiService , private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.api.signIn(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token,);
          localStorage.setItem('rolx', res.rolx);
          var rolx = localStorage.getItem('rolx')
          console.log(rolx)
          this.router.navigate(['/inicio'])
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1200,
            timerProgressBar: true,

            
          }).then(() => {
            window.location.reload()});

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
   

}
 