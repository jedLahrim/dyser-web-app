import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  DownArrowIconComponent,
} from '../../../../components/icons/linear/arrow-icon/down-arrow-icon/down-arrow-icon.component';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [
    DownArrowIconComponent,
  ],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css',
})
export class RevenueComponent {

  totalRevenue: string = '86,044';
  avgTransactions: string = '6,144';

  @ViewChild('comboChart') comboChartRef!: ElementRef;

  ngAfterViewInit() {
    this.createComboChart();
  }

  createComboChart() {
    const ctx = this.comboChartRef.nativeElement.getContext('2d');

    let data = [2000, 3000, 4000, 3500, 5000, 6000, 7000, 8000, 8500, 9500, 11000, 7000, 4000];

    const config: ChartConfiguration<any> = {
      type: 'line', // Start with bar chart to include bars
      data: {
        labels: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ],
        datasets: [
          // {
          //   type: 'bar',
          //   label: 'Background Bars',
          //   data: data,
          //   backgroundColor: 'rgba(131, 96, 247, 0.1)',  // Adjust the background color and transparency
          //   barPercentage: 0.3,
          //   categoryPercentage: 0.5,
          //   borderWidth: 0,
          //   order: 0,
          // },
          {
            type: 'line',
            label: 'Growth',
            data: data,
            borderColor: '#8360F7',
            backgroundColor: 'transparent',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
            pointRadius: 0,
            pointHoverRadius: 3,
            order: 1,
            animation: {
              duration: 2200,
            },
            segment: {
              borderDash: (ctx: any) => {
                const index = ctx.p0DataIndex;
                return index >= 8 ? [5, 5] : []; // Apply dash pattern from index 8 (September) onwards
              },
            },
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            border: { display: false },
            beginAtZero: true,
            ticks: {
              color: 'rgb(131,137,152,0.8)',
              callback: function(value: any) {
                if (value === 0) return '0';
                if (value === 2000) return '2k';
                if (value === 4000) return '4k';
                if (value === 6000) return '6k';
                if (value === 8000) return '8k';
                if (value === 10000) return '9k';
                if (value === 12000) return '10k';
                return '';
              },
              font: {
                size: 12,
              },
            },
            grid: {
              display: false,
            },
          },
          x: {
            beginAtZero: true,
            border: { display: false, dash: [5, 5] },
            grid: {
              color: 'rgb(223,227,233,0.7)',
              display: true,
              tickLength: 22,
            },
            ticks: {
              color: 'rgb(131,137,152,0.8)',
              font: {
                size: 12,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };

    new Chart(ctx, config);
  }

}


