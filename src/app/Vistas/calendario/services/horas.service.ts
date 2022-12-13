import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horas } from '../interface/horas.interface';

@Injectable({
  providedIn: 'root'
})
export class HorasService {
  url: string = 'http://localhost:8080/Clinica';

  constructor( private http: HttpClient ) {}

  getHoras(): Observable<Horas[]> {
    const url = `${ this.url }/listar-horas`;
    return this.http.get<Horas[]>( url );
  }
}
