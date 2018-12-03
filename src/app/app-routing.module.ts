import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';



const appRoutes:Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path:'home',
    component:DashboardComponent
  },
  {
    path:'patient',
    component:PatientComponent
  }

];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
