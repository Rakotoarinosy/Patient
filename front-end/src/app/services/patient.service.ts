import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { Patient } from '../Entity/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8081/patients";

  constructor() { }

  getPatients(): Observable<AxiosResponse<Patient[]>> {
    return from(axios.get<Patient[]>(this.baseURL));
    console.log(this.baseURL)
  }

  getPatient(id: number): Observable<AxiosResponse<Patient>> {
    return from(axios.get<Patient>(`${this.baseURL}/${id}`));
  }

  createPatient(patient: Patient): Observable<AxiosResponse<Patient>> {
    return from(axios.post<Patient>(`${this.baseURL}/create`, patient));
  }

  updatePatient(id: number, patient: Patient): Observable<AxiosResponse<Patient>> {
    return from(axios.put<Patient>(`${this.baseURL}/${id}`, patient));
  }

  deletePatient(id: number): Observable<AxiosResponse<void>> {
    return from(axios.delete<void>(`${this.baseURL}/${id}`));
  }
}
