import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApidoctorService {

 
  constructor(private http:HttpClient) { } 

  getDoctor(){
    return this.http.get(`${environment.baseUrl}/etudiants/GetAllE`)
  }
 
  getDoctorById(numE:any){
   return  this.http.get(`${environment.baseUrl}/etudiants/getone/${numE}`)
  }

  deleteDoctor(numE:any){
   return this.http.delete(`${environment.baseUrl}/etudiants/delete/${numE}`)
  }

  addDoctor(Doctor:any){
   return this.http.post(`${environment.baseUrl}/etudiants/AddE`,Doctor)
  }

  UpdateDoctor(numE:any,updateDoctor:any){
    return this.http.put(`${environment.baseUrl}/etudiants/modif/${numE}`,updateDoctor)
  }
}