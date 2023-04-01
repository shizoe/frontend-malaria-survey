import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Labresult} from "../../models/labresult.model";
import {LabresultService} from "../../services/labresult.service";
import {Router} from "@angular/router";
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../models/patient.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PatientregistrationComponent} from "../patientregistration/patientregistration.component";


@Component({
  selector: 'app-labresults',
  templateUrl: './labresults.component.html',
  styleUrls: ['./labresults.component.css']
})
export class LabresultsComponent implements OnInit {
  labresult: Labresult = new Labresult();
  patient: Patient = new Patient();
  errorMessage: string="";
  results: Patient = new Patient();
  isFemale: boolean = false;
  opdnumber: string = "";
  @Output() save = new EventEmitter<any>();


  constructor(private labresultService: LabresultService,
              private patientService: PatientService,
              private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getOpdnumber(event: any)
  {
    this.patientService.getPatient(event.target.value).subscribe(data =>{
      this.results = data;
      console.warn(this.results);
      if(this.results == null)
      {
        this.isFemale = false;
      }
      else
      if(this.results.sex === "female")
      {
        this.labresult.patient.id = this.results.id;
        this.opdnumber = this.results.opdnumber;

        if(this.results.pregnant === "N/A"){
          this.isFemale = true;
        }
      }
      else
      {
       this.labresult.patient.id = this.results.id;
        this.opdnumber = this.results.opdnumber;
      }
    });

  }
  submit()
  {
    if(this.results == null)
    {
      this.errorMessage = 'Patient is not registered. Please first register client'
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      dialogConfig.height="100%";
      this.dialog.open(PatientregistrationComponent, dialogConfig);
    }
    else
    {
      if(this.patient.pregnant){
        this.patientService.updatePatient(this.patient.opdnumber.toString(), this.patient).subscribe(data=>{
        })
      };
      this.labresultService.submit(this.labresult).subscribe(data=>{
        this.router.navigate(['/followuplist']);
      },err => {
        if(err?.status === 409){
          this.errorMessage = 'Patient Malaria Results Already Entered.';
        }else
        {
          this.errorMessage = 'Unexpected error, please try again. If this problem persists. Please contact your sys admin ' + err?.errorMessage;
        }
      });
    }


  }
}
