import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApietudiantService {


  constructor(private http:HttpClient) { } 

  GetAllE(){
    return this.http.get(`${environment.baseUrl}/etudiants/GetAllE`)
  }
 
  getEtudiantById(numE:any){
   return  this.http.get(`${environment.baseUrl}/etudiants/getone/${numE}`)
  }

  delete(numE:any){
   return this.http.delete(`${environment.baseUrl}/etudiants/delete/${numE}`)
  }

  AddE(Etudiant:any){
   return this.http.post(`${environment.baseUrl}/etudiants/AddE`,Etudiant)
  }

  modif(numE:any,updateEtudiant:any){
    return this.http.put(`${environment.baseUrl}/etudiants/modif/${numE}`,updateEtudiant)
  }
}
