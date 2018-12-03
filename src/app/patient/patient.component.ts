import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})


export class PatientComponent implements OnInit {

  arrPatients: string [];
  closeResult: string;
  public patphone='';
  public patname='';



  constructor(private httpService: HttpClient,private modalService: NgbModal) {


   }

  ngOnInit() {

    this.httpService.get('assets/data.json').subscribe(
   data => {
     this.arrPatients = data as string [];	 // FILL THE ARRAY WITH DATA.
       //console.log(this.arrPatients);
   },
   (err: HttpErrorResponse) => {
     console.log (err.message);
   }
 );
/***/

  }

  open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

    return 'by clicking on a backdrop';

  } else {

    console.log(this.arrPatients);
    let id=this.arrPatients.length+1;
    let id2='id';
    let patient={"Name":this.patname,"Type":"patient","PHONE":this.patphone,"ID":id2};
    this.arrPatients.push(JSON.stringify(patient));
    
    return  `with: ${reason}`;
  }

}




}
