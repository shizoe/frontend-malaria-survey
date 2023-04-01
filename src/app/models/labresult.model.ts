import {Patient} from "./patient.model";

export class Labresult{
  id: number | undefined;
  patient: Patient = new Patient();
  malariaResults: string="";
  testDate: Date = new Date();
  createdTime: Date = new Date()
}
