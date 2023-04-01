import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {Labresult} from "../models/labresult.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

const API_URL =  `${environment.BASE_URL}/api/labresult/`

@Injectable({
  providedIn: 'root'
})
export class LabresultService extends BaseService{

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http)
  }

  submit(labresult: Labresult):Observable<any>{
    return this.http.post(API_URL, labresult,{headers:this.getHeaders});
  }

  getReview():Observable<any>{
    return this.http.get(API_URL, {headers: this.getHeaders});
  }

}
