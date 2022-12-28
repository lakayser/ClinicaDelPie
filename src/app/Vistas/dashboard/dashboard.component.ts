import { Component, OnInit } from '@angular/core';
import { TomarhoraService } from 'src/app/Servicios/tomarhora.service';
import { HoraReservadas } from 'src/app/Modelos/horareservada';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hora:HoraReservadas[];

  resizeChart(width: any): void {
    this.view = [width, 320]
  }
  
  view:[number, number] = [630, 300];


  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  legend: boolean = true;
  
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cancha1 =[
    {
      "name" : "Reservadas",
      "value": 45
    },{
      "name" : "Disponibles",
      "value": 15
    },{
      "name" : "Realizadas",
      "value": 16
    },{
      "name" : "Canceladas",
      "value": 14
    },
  ];
  cancha2 =[
    {
      "name" : "Reservadas",
      "value": 50
    },{
      "name" : "Disponibles",
      "value": 15
    },{
      "name" : "Realizadas",
      "value": 23
    },{
      "name" : "Canceladas",
      "value": 2
    },
  ];
 multi= [
  {
    "name": "CLinica Del Pie",
    "series": [
      {
        "value": 417,
        "name": "Septiembre"
      },
      {
        "value": 356,
        "name": "Octubre"
      },
      {
        "value": 381,
        "name": "Noviembre"
      },
      
    ]
  }
]


  constructor(public tomarhoraService:TomarhoraService) { }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  onResize(event:any) {
    this.view = [event.target.innerWidth / 1.35, 400];
}

  ngOnInit(): void {
    this.getHoratomada();
  }

  getHoratomada(){
    this.tomarhoraService.getHoraTomada().subscribe((res)=>{
      this.hora=res;
      console.log(this.hora)
    })
  }

}
