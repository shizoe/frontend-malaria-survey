import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../models/patient.model";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PatientregistrationComponent} from "../patientregistration/patientregistration.component";
import {PatientdetailsComponent} from "../patientdetails/patientdetails.component";

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  patientList: Array<Patient> = [];
  patient: Patient | undefined = new Patient();
  constructor(private patientService: PatientService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(data => {
      this.patientList = data;
    })
  }

  viewDetails(id: any) {
    let route = '/contacts/edit-contact';
    //this.router.navigate([route], { queryParams: { patientDetail: this.patientList.entries()} });
    console.log(this.patientList.find(i => i.id === id));
    this.patient = this.patientList.find(i => i.id === id);
    console.warn(this.patient?.firstname);
    console.warn(this.patient?.lastname);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height="100%";
    dialogConfig.data = this.patient;
    this.dialog.open(PatientdetailsComponent, dialogConfig);

  }

}
