import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApidoctorService } from 'src/app/services/apidoctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listedoctor',
  templateUrl: './listedoctor.component.html',
  styleUrls: ['./listedoctor.component.css']
})
export class ListedoctorComponent implements OnInit {
  ListDoctors:any
  closeResult=""
  searchText:any
  UpdateDoctor={numE:"",firstName:"",lastName:"",telephoneNumber:"",email:"",adress:"",specialityId:"",codeOMS:""}
  p: number = 1;

  constructor(private apidoctorservice:ApidoctorService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getDoctor()
  }

  getDoctor(){
    this.apidoctorservice.getDoctor().subscribe(res=>{
     /* console.log('reponse',res)*/
      this.ListDoctors=res
    })
  }

  
  deleteDoctor(numE:any){
 
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.apidoctorservice.deleteDoctor(numE).subscribe(res=>{
         
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

          this.getDoctor()
        })
       
      }
    }) 

 
  }
//modal forms update
  open(content:any, Doctor:any) {
    this.UpdateDoctor.numE=Doctor.numE
    this.UpdateDoctor.firstName=Doctor.firstName
    this.UpdateDoctor.lastName=Doctor.lastName
    this.UpdateDoctor.telephoneNumber=Doctor.telephoneNumber
    this.UpdateDoctor.email=Doctor.email
    this.UpdateDoctor.adress=Doctor.adress
    this.UpdateDoctor.specialityId=Doctor.specialityId
    this.UpdateDoctor.codeOMS=Doctor.codeOMS
   

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
    });
  }

  Update_Doctor(){
    this.apidoctorservice.UpdateDoctor(this.UpdateDoctor.numE,this.UpdateDoctor).subscribe(res=>{
      Swal.fire("update with successfuly","success")
      this.getDoctor()
    })
  }

}
