import { Component, OnInit } from '@angular/core';
import { ApietudiantService } from 'src/app/services/apietudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
ListEtudiants:any
closeResult=""
search_name:any
updateUser={id:"",name:"",adress:"",email:""}
p: number = 1;

  constructor(private apiservice:ApietudiantService) { }

  ngOnInit(): void {
    this.GetAllEtudiant()
  }

  GetAllEtudiant(){
    this.apiservice.GetAllE().subscribe(res=>{
      console.log('reponse',res)
      this.ListEtudiants=res
    })
  }

  
   
    


DeleteEtudiant(numE:any){
 
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

      this.apiservice.delete(numE).subscribe(res=>{
       
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )

        this.GetAllEtudiant()
      })
     
    }
  }) 


}


}
