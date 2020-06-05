import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  showFiller = false;
  navstatus = true;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth <= 980){
      this.navstatus = false;
    }
  }
}
