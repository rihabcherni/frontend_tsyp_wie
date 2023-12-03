import { Component, Renderer2, ElementRef ,OnInit,ViewChild} from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  ngOnInit() {
    // Line Chart
    const lineChartData = {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020','2021','2022','2023'],
      datasets: [{

        data: [50, 60, 55, 65, 70, 65,75,80,70,90],
        backgroundColor:'#fa7e71',
        borderColor: '#fa7e71',
        fill: false,
      }]
    };

    new Chart('statisticsLineChart', {
      type: 'line',
      data: lineChartData,
      options: {}
    });


    const barChartData = {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020','2021','2022','2023'],
      datasets: [{
        // label
        data: [8,11,13,15,20, 18,22,25,20,21,24,25,28,30,32],
        backgroundColor: '#01b5b2',
        borderColor: 'white',
        borderWidth: 1,

      }, ]
    };

    new Chart('statisticsBarChart', {
      type: 'bar',
      data: barChartData,
      options: {}
    });
  }


}
