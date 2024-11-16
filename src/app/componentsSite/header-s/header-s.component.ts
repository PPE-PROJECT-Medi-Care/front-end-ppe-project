import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApidoctorService } from 'src/app/services/apidoctor.service';

@Component({
  selector: 'app-header-s',
  templateUrl: './header-s.component.html',
  styleUrls: ['./header-s.component.css']
})
export class HeaderSComponent implements OnInit {
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
