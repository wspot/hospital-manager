import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiCallerService } from '../Shared/Services/api-caller.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})


export class PatientComponent implements OnInit {

  public getDataServiceName: string = "assets/data.json";

  arrPatients: string[];
  closeResult: string;
  public patphone = '';
  public patname = '';



  constructor(private modalService: NgbModal, private apicaller: ApiCallerService) { }

  ngOnInit() {
    this.apicaller.callGetService(this.getDataServiceName).subscribe(
      (resp: any) => {
        if (resp.type !== 'error') {
          this.arrPatients = resp as string[];
        } else {
          console.log(resp);
        }
      }
    );
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      //console.log(this.arrPatients);
      let id = this.arrPatients.length + 1;
      let id2 = 'id';
      let patient = { "Name": this.patname, "Type": "patient", "PHONE": this.patphone, "ID": id2 };
      this.arrPatients.push(JSON.stringify(patient));

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

      return `with: ${reason}`;
    }
  }
}
