import { Injectable } from '@angular/core';
import { HoraReservadas } from '../Modelos/horareservada';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TomarhoraService {

  URL: string = 'http://localhost:8080/Clinica/';

  horareservada: HoraReservadas[];
  
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});

  constructor(private http:HttpClient) { }

  createHoraTomada(id: string, horasTomada: HoraReservadas){
    return this.http.post(`${this.URL}tomar-hora/${id}`, horasTomada)
  }
  getHoraTomada(){
    return this.http.get<HoraReservadas[]>(`${this.URL}listar-tomadas`)
  }
  deleteHoraTomada(id:string){
    return this.http.delete(`${this.URL}eliminar-reserva/${id}`)
  }
  editHoraTomada(horareservada: HoraReservadas){
    return this.http.put(`${this.URL}/editar-reserva/${horareservada._id}`, horareservada)
  }
  getHoraTomadaId(id:string): Observable<HoraReservadas[]>{
    return this.http.get<HoraReservadas[]>(`${this.URL}listar-tomada/${id}`)
  }

}
