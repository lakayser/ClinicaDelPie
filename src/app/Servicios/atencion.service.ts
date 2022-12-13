import { Injectable } from '@angular/core';
import { Atencion } from '../Modelos/atencion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AtencionService {
  URL: string = 'http://localhost:8080/Clinica/';
  
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  atencion:Atencion[];

  constructor(private http:HttpClient) { }


  getAtencion(){
    return this.http.get<Atencion[]>(`${this.URL}listar-atenciones`);
  }

  postAtencion(atencion: Atencion){
    return this.http.post(`${this.URL}registrar-atencion`, atencion);

  }

}