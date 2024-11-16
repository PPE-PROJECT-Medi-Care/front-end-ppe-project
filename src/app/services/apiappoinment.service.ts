import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiappoinmentService {

 
  constructor(private http:HttpClient) { } 

  getApp(){
    return this.http.get(`${environment.baseUrl}/app/GetAllE`)
  }
 
  getAppById(idApp:any){
   return  this.http.get(`${environment.baseUrl}/app/getone/${idApp}`)
  }

  deleteApp(idApp:any){
   return this.http.delete(`${environment.baseUrl}/app/delete/${idApp}`)
  }

  addApp(App:any){
   return this.http.post(`${environment.baseUrl}/app/AddE`,App)
  }

  UpdateApp(idApp:any,updateApp:any){
    return this.http.put(`${environment.baseUrl}/app/modif/${idApp}`,updateApp)
  }
}
