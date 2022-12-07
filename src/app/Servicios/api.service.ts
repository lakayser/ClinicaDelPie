import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Modelos/usuarios';
import { Roles } from '../Modelos/roles';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private URL = "http://localhost:8080/Clinica/";

  selectedUsuario: Usuario ={
    _id: '',
    userName: '',
    password:  '',
    roles: ''
    
  }

  users: Usuario[];
  roles: Roles[];

  constructor(public http: HttpClient, public router: Router) { }

  
  signIn (user:any){
    
    return this.http.post<any>(this.URL + 'login', user);
  }
  getRoles(){
    return this.http.get<Roles[]>(`${this.URL}listar-roles`)
  }
  getUsuarios(){
    return this.http.get<Usuario[]>(`${this.URL}listar-usuarios`);
  }
  
  crearUsuario(usuario:Usuario){

    return this.http.post(`${this.URL}crear-usuario`, usuario);
  }
  

  loggedIn () {
    return !!localStorage.getItem('token');
  }

  getToken () {
    return localStorage.getItem('token');
  }

  logout () {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
