import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CargaMasiva } from '../Modelos/cargamasiva';
import { HorasMasivas } from '../Modelos/horasmasivas';

@Injectable({
  providedIn: 'root'
})
export class HoramasivaService {
  
  URL: string = 'http://localhost:8080/Clinica/';


  selectedHorasMasivas: HorasMasivas={
    _id: '',
    horacomienzo: '',
    horatermino: '',
    intervalo: ''
  };
  selectedCargaMasiva: CargaMasiva = {
    _id:'',
    fecha: new Date(),
    dia: '',
    disponibilidad: true,
    horario: '',
    semana: 0,
  }
  cargamasi: CargaMasiva[];


  horamasi: HorasMasivas[];

  private httpheaders = new HttpHeaders({'Content-Type' : 'aplication/json'});
  constructor(private http:HttpClient) { }

  createHorasMasivas(horamasi:HorasMasivas){
    return this.http.post(`${this.URL}Crear-horas`, horamasi)
  }
  getCargaMasiva(){
    return this.http.get<CargaMasiva[]>(`${this.URL}listar-horas`)
  }
  getCargaMasivaEspe(id:string){
    return this.http.get<CargaMasiva[]>(`${this.URL}listar-hora-especifica/${id}`)
  }
  editCargaMasiva(cargamasiva:CargaMasiva){
    return this.http.put(`${this.URL}editar-horas/${cargamasiva._id}`, cargamasiva)
  }
  deleteCargaMasiva(id: string){
    return this.http.delete(`${this.URL}eliminar-hora/${id}`)
  }
}
