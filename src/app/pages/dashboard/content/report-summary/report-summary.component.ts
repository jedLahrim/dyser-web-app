import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-report-summary',
  standalone: true,
  imports: [],
  templateUrl: './report-summary.component.html',
  styleUrl: './report-summary.component.css',
})
export class ReportSummaryComponent implements AfterViewInit {
  @ViewChild('salesChart') salesChartRef!: ElementRef;
  @ViewChild('subChartChart') subChartChart!: ElementRef;
  // @ViewChild('grossChart') grossChartRef!: ElementRef;
  // @ViewChild('retentionChart') retentionChartRef!: ElementRef;
  // @ViewChild('couponChart') couponChartRef!: ElementRef;

  ngAfterViewInit() {
    this.createSalesChart();
    this.createSubChart();
  }

  createSalesChart() {
    const ctx = this.salesChartRef.nativeElement.getContext('2d');

    const config: ChartConfiguration<'bar', number[], string> = {
      type: 'bar',
      data: {
        labels: ['9 Jul', '10 Jul', '11 Jul', '12 Jul', '14 Jul', '15 Jul', '16 Jul'],
        datasets: [{
          label: 'Net Volume from sales',
          data: [20000, 17000, 19000, 21000, 10000, 16000, 22000],
          backgroundColor: '#8360F7',
          borderColor: '#8360F7',
          borderWidth: 1,
          barThickness: 20,
          borderRadius: 3,
          clip: false,  // Allow bars to exceed y-axis max
        },
          {
            label: 'New Customers',
            data: [15000, 12000, 18000, 20000, 11000, 15000, 15000],
            backgroundColor: '#5EC7ED',
            borderColor: '#5EC7ED',
            barThickness: 20,
            animation: { duration: 2200 },
            borderWidth: 1,
            borderRadius: 3,
            // clip: false,  // Allow bars to exceed y-axis max
          }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            border: { display: false },
            grid: { display: false },
            beginAtZero: true,
            suggestedMax: 20000,
            // max: 20000,
            ticks: {
              stepSize: 5000,
              callback: function(value: any) {
                // Show only 0, 5k, 10k, 15k, 20k
                if (value > 20000) {
                  return;
                }
                if (value % 5000 === 0) {
                  return value === 0 ? '0' : value / 1000 + 'k';
                }
                return null; // Skip other values
              },
              font: {
                size: 8,
              },
            },
          },
          x: {
            border: { display: false },
            grid: { display: false },
            ticks: {
              font: {
                size: 8,
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

  createSubChart() {
    const ctx = this.subChartChart.nativeElement.getContext('2d');
    const config: ChartConfiguration<'bar', number[], string> = {
      type: 'bar',
      data: {
        labels: ['Gross', 'Retention', 'Coupon'],
        datasets: [
          {
            label: 'New Customers',
            data: [26, 22, 50],
            backgroundColor: 'rgba(100, 56, 245, 0.80)',
            borderColor: '#fff', // White border to create space
            borderWidth: 2, // Thickness of the border to simulate spacing
            borderSkipped: false,
            borderRadius: {
              topLeft: 7,
              topRight: 7,
              bottomLeft: 7,
              bottomRight: 7,
            },
            barThickness: 60, // Adjust this value to control the thickness of the bars
            animation: {
              duration: 2200,
            },
          },
          {
            label: 'Net Volume from sales',
            data: [22, 48, 10],
            backgroundColor: 'rgba(54, 185, 233, 0.80)',
            borderColor: '#fff',
            borderWidth: 2,
            borderSkipped: false,
            borderRadius: {
              topLeft: 7,
              topRight: 7,
              bottomLeft: 7,
              bottomRight: 7,
            },
            barThickness: 60,
            animation: {
              duration: 2200,
            },
          },
          {
            label: 'New Subscribers | Success Payment',
            data: [46, 24, 36],
            backgroundColor: 'rgba(55, 183, 147, 0.80)',
            borderColor: '#fff',
            borderWidth: 2,
            borderSkipped: false,
            borderRadius: {
              topLeft: 7,
              topRight: 7,
              bottomLeft: 7,
              bottomRight: 7,
            },
            barThickness: 60,
            animation: {
              duration: 2200,
            },
          },
          {
            label: 'Unfilled',
            data: [30, 30, 30], // Gray area values
            backgroundColor: 'rgb(223,227,233,0.6)',
            borderColor: '#fff',
            borderWidth: 2,
            borderSkipped: false,
            borderRadius: {
              topLeft: 7,
              topRight: 7,
              bottomLeft: 7,
              bottomRight: 7,
            },
            barThickness: 60,
            animation: {
              duration: 2200,
            },
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false, // Remove the grid lines
            },
            ticks: {
              font: {
                size: 12,
              },
              color: '#323741',
              padding: 3, // Adjust the padding to move the labels away from the edge
              display: true, // Ensure that the labels are still displayed
            },
            border: {
              display: false, // Remove the axis line
            },
          },
          y: {
            display: false,
            stacked: true,
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    };
    new Chart(ctx, config);
  }


}
