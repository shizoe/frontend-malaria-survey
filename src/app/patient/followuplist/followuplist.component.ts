import { Component, OnInit } from '@angular/core';
import {Patient} from "../../models/patient.model";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PatientdetailsComponent} from "../patientdetails/patientdetails.component";
import {Labresult} from "../../models/labresult.model";
import {LabresultService} from "../../services/labresult.service";
import {FollowupdetailComponent} from "../followupdetail/followupdetail.component";
import {PatientregistrationComponent} from "../patientregistration/patientregistration.component";
import {MDCTextField} from '@material/textfield';



@Component({
  selector: 'app-followuplist',
  templateUrl: './followuplist.component.html',
  styleUrls: ['./followuplist.component.css']
})
export class FollowuplistComponent implements OnInit {
  reviewList: Array<Labresult> = [];
  patient: Labresult | undefined = new Labresult();
  constructor(private labresultService: LabresultService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.labresultService.getReview().subscribe(data => {
      this.reviewList = data;
    })
  }

  viewDetails(id: any) {
    let route = '/contacts/edit-contact';
    //this.router.navigate([route], { queryParams: { patientDetail: this.patientList.entries()} });
    console.log(this.reviewList.find(i => i.id === id));
    this.patient = this.reviewList.find(i => i.id === id);
    console.warn(this.patient?.patient.firstname);
    console.warn(this.patient?.malariaResults);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "100%";
    dialogConfig.height="100%";
    dialogConfig.data = this.patient;
    this.dialog.open(PatientregistrationComponent, dialogConfig);

  }
}
