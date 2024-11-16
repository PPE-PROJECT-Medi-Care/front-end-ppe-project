import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApidoctorService } from 'src/app/services/apidoctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  ListOfDoctors:any
  searchText:any
  constructor(private apidoctorservice:ApidoctorService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getDoctor()
  }

  getDoctor(){
    this.apidoctorservice.getDoctor().subscribe(res=>{
     /* console.log('reponse',res)*/
      this.ListOfDoctors=res
    })
  }

}
