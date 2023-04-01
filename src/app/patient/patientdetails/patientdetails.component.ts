import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Patient} from "../../models/patient.model";

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public patient: Patient,
              public dialogRef: MatDialogRef<PatientdetailsComponent>) { }

  onClose(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
