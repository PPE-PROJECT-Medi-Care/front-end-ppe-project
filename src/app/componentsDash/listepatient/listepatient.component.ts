import { Component, OnInit } from '@angular/core';
import { ApidoctorService } from 'src/app/services/apidoctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listepatient',
  templateUrl: './listepatient.component.html',
  styleUrls: ['./listepatient.component.css']
})
export class ListepatientComponent implements OnInit {

  ListDoctors:any
  closeResult=""
  searchText:any
  UpdateDoctor={id:"",firstName:"",lastName:"",telephoneNumber:"",email:"",adress:"",specialityId:"",codeOMS:""}
  p: number = 1;

  constructor(private apidoctorservice:ApidoctorService) { }

  ngOnInit(): void {
    this.getDoctor()
  }

  getDoctor(){
    this.apidoctorservice.getDoctor().subscribe(res=>{
     /* console.log('reponse',res)*/
      this.ListDoctors=res
    })
  }

  
  deleteDoctor(id:any){
 
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

        this.apidoctorservice.deleteDoctor(id).subscribe(res=>{
         
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
 
   



 

}
