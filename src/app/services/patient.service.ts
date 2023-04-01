import { Injectable } from '@angular/core';
import {Patient} from "../models/patient.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {AuthenticationService} from "./authentication.service";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";

const API_URL =  `${environment.BASE_URL}/api/patient/`

@Injectable({
  providedIn: 'root'
})
export class PatientService extends BaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient)
  {
    super(authenticationService, http);
  }

  register(patient: Patient):Observable<any>{
    return this.http.post(API_URL, patient, {headers: this.getHeaders});
  }

  getPatient(opdnumber: String):Observable<any>{
    return this.http.get(API_URL + 'patient/' + opdnumber, {headers: this.getHeaders});
  }

  getPatients():Observable<any>{
    return this.http.get(API_URL, {headers: this.getHeaders});
  }

  updatePatient(opdnumber:string, patient: Patient):Observable<any>{
    return this.http.patch( `${API_URL}${opdnumber}`, patient, {headers: this.getHeaders});
}
}
