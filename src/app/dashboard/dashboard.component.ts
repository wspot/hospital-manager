import { Component, OnInit,Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DonutComponent } from '../donut/donut.component';
import { GraphComponent } from '../graph/graph.component';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
