import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiadminService {

  constructor(private http:HttpClient) { } 

  getCostemer(){
    return this.http.get(`${environment.baseUrl}/Users/All`)
  }
 
  getCostemerById(id:any){
   return  this.http.get(`${environment.baseUrl}/Users/getone/${id}`)
  }

  deleteCostemer(id:any){
   return this.http.delete(`${environment.baseUrl}/Users/delete/${id}`)
  }

  addCostemer(Costemer:any){
   return this.http.post(`${environment.baseUrl}/Users/Save`,Costemer)
  }

  UpdateCostemer(id:any,updateCostemer:any){
    return this.http.put(`${environment.baseUrl}/Users/modif/${id}`,updateCostemer)
  }
}
