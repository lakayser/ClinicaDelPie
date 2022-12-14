import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Servicios/api.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user={
    nameUser:'',
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
          localStorage.setItem('rol', res.rol);
          var rol = localStorage.getItem('rol')
          console.log(rol)
          this.router.navigate(['/inicio'])

        })
  }

}
 