import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-net-revenue',
  standalone: true,
  imports: [],
  templateUrl: './net-revenue.component.html',
  styleUrl: './net-revenue.component.css',
})
export class NetRevenueComponent {
  @ViewChild('gaugeChart') chartCanvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    // Any initialization logic if needed
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Customers', 'Subscription'],
          datasets: [{
            data: [1254, 780, 0], // Customers, Subscription, Remaining (to complete the circle)
            backgroundColor: [
              '#6137eb',
              '#e7a640',
              '#F8FAFB',
            ],
            borderWidth: 0,
            animation: {
              duration: 2200,
            },
          }],
        },
        options: {
          cutout: '75%',
          rotation: 270, // Start at the top (270 degrees)
          circumference: 180, // Half circle (180 degrees)
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
        },
      });
    }
  }

}
