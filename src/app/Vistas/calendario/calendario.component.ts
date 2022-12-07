import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Servicios/api.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  user={
    nameUser:'',
    password: ''
  }
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

}
