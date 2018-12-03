import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name:string;
  @Input() number:string;
  @Input() progression:string;
  @Input() type:string;
  @Input() symbol:string;


  constructor() { }

  ngOnInit() {
  }

}
