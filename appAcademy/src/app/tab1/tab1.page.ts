import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [330, 600, 260, 700], label: 'Biceps / Peito' },
    { data: [120, 455, 100, 340], label: 'Perna' },
    { data: [45, 67, 800, 500], label: 'Esteira' }
  ];
  chartLabels = ['11:30', '15:30', '18:00', '22:00'];
  
  constructor() {}

}
