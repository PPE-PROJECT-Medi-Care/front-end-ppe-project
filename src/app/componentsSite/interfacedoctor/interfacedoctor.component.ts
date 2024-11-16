import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiappoinmentService } from 'src/app/services/apiappoinment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-interfacedoctor',
  templateUrl: './interfacedoctor.component.html',
  styleUrls: ['./interfacedoctor.component.css']
})
export class InterfacedoctorComponent implements OnInit {
  ListApp:any
  closeResult=""
  searchText:any
  constructor(private apiappoinmentservice:ApiappoinmentService,
    private modalService: NgbModal) { }
    ngOnInit(): void {
      this.getApp()
    }
    getApp(){
      this.apiappoinmentservice.getApp().subscribe(res=>{
        //console.log('reponse',res)
      this.ListApp=res
      })
    }
    deleteApp(idApp:any){
 
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, refuse it!'
      }).then((result) => {
        if (result.isConfirmed) {
  
          this.apiappoinmentservice.deleteApp(idApp).subscribe(res=>{
           
            Swal.fire(
              'Refused!',
              'The appoinment has been refused.',
              'success'
            )
  
            this.getApp()
          })
         
        }
      }) 
  
   
    }
 
}
