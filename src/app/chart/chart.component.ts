import { Component, OnInit } from '@angular/core';
import {ChartDataService} from '../chart-data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers :[ChartDataService]
})
export class ChartComponent implements OnInit{
  constructor(private ChartDataService: ChartDataService){}
  categoryDetails = this.ChartDataService.category();
  chart1: Object;
  ngOnInit() {
      this.chartGraph();
  }
  chartGraph() {
    this.chart1 = {
        chart: { 
        width: 950,
        height: 300,
        type: 'area',
        polar: true,
       },
        title : { text : '' },
        credits: {
            enabled: false,
            series1: false
        },
        xAxis: {
            categories: this.categoryDetails,
            min: 0.5,
            max: this.categoryDetails.length-1.5,
            startOnTick: false,
            endOnTick: false,
            minPadding: 0,
            maxPadding: 0,
            align: "left"  
        },
        yAxis: {
            labels: {
                formatter: function () {
                  return this.value / 100 + 'k';
                }
              },
            title: false

        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                },
                fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, '#e9f2fc'],
                      [1, '#f4f4f4']
                  ]
              },
            }
        },  
        series: [{
            yAxis: 0,
            data: this.ChartDataService.chartYaxisData(),
            showInLegend: false,
        }]
    };
      }
  }

