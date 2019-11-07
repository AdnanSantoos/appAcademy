import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page  implements OnInit {
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [40, 35, 70, 50], label: 'Biceps / Peito' },
    { data: [40, 45, 60, 50], label: 'Perna' },
    { data: [40, 35, 45, 55], label: 'Esteira' }
  ];
  chartLabels = ['11:30', '15:30', '18:00', '22:00'];
  data = new Date();
  dataAtual: any;
  constructor( public datepipe: DatePipe) {
    this.dataAtual = this.datepipe.transform(this.data,'dd-MM-yyy');
  }
  
  ngOnInit(){
   
  }

}
