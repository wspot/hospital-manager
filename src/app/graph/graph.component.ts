import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  public lineChartLabels:string[] = ['january', 'february', 'march', 'april', 'may', 'june', 'july'];
  public lineChartData:number[] = [0,15,30,10,15,90,77];
  public lineChartType:string = 'line';

  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
