import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { CardComponent } from './card/card.component';
import { GraphComponent } from './graph/graph.component';
import { DonutComponent } from './donut/donut.component';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { ErrorInerceptor } from './Shared/Interceptors/error-inerceptor';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GraphComponent,
    DonutComponent,
    DashboardComponent,
    PatientComponent,

  ],
  imports: [
    BrowserModule, NgbModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MatSidenavModule, MatIconModule, ChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInerceptor, multi: true }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
