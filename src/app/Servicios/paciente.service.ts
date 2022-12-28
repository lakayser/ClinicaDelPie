import { Injectable } from '@angular/core';
import { Paciente } from '../Modelos/paciente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  URL: string = 'http://localhost:8080/Clinica/';

  paciente:Paciente[];

  selectedPaciente: Paciente ={
    _id: '',
    nombre: '',
    fechaNac: '',
    numeroContacto: '',
    numeroEmergencia: '',
    rut: '',
    enfermedadR: ''
  }
  
  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});


  constructor(private http:HttpClient) { }


  getPaciente(){
    return this.http.get<Paciente[]>(`${this.URL}listar-pacientes`);
  }
  getPacienteID(id:string):Observable<Paciente[]>{
    return this.http.get<Paciente[]>(`${this.URL}listar-paciente/${id}`)
  }

  createPaciente(paciente: Paciente){
    return this.http.post(`${this.URL}registrar-paciente`, paciente);

  }
  putPaciente(paciente: Paciente){
    return this.http.put(`${this.URL}editar-paciente/${paciente._id}`, paciente);
  }
  deletePaciente(id: string){
    return this.http.delete(`${this.URL}eliminar-paciente/${id}`);
  }
}
