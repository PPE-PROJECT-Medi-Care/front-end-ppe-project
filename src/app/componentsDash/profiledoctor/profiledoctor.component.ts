import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApidoctorService } from 'src/app/services/apidoctor.service';

@Component({
  selector: 'app-profiledoctor',
  templateUrl: './profiledoctor.component.html',
  styleUrls: ['./profiledoctor.component.css']
})
export class ProfiledoctorComponent implements OnInit {
  Doctor:any
  numE=this.avtiveroute.snapshot.params.numE
  constructor(private apidoctorservice:ApidoctorService,
    private avtiveroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneDoctor()
  }
  getOneDoctor(){
    this.apidoctorservice.getDoctorById(this.numE).subscribe(res=>{
     /* console.log('reponse',res)*/
      this.Doctor=res
    })
  }

}
