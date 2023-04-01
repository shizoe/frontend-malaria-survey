import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {Patient} from "../../models/patient.model";
import {PatientService} from "../../services/patient.service";
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})
export class PatientregistrationComponent {
  patient: Patient = new Patient();
  faUser = faUserCircle;
  errorMessage: string="";
  registerPatient: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    sex: new FormControl(''),
    dateOfBith: new FormControl(''),
    housenumber: new FormControl(''),
    village: new FormControl(''),
    phonenumber: new FormControl('')
  });

  constructor(private patientService: PatientService,
              private router: Router) { }


  register()
  {
    this.patientService.register(this.patient).subscribe(data=>{
      //this.router.navigate(['/labresults']);
    },err => {
      if(err?.status === 409){
        this.errorMessage = 'Patient already exists.';
      }else
      {
        this.errorMessage = 'Unexpected error, please try again. If this problem persists. Please contact your sys admin ';
      }
    })
  }


}
