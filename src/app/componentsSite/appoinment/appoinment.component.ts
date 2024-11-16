import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiappoinmentService } from 'src/app/services/apiappoinment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent implements OnInit {
  ajoutForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    //private route:Router,
     private apiappoinmentervice:ApiappoinmentService) { }

     ngOnInit() {
      this.ajoutForm = this.formBuilder.group({
       
        FNameDoctor: ['', Validators.required],
        LNameDoctor: ['', Validators.required],
      date: ['', Validators.required],
      telephoneNumber: ['', Validators.required],
      FNamePatient: ['', Validators.required],
      LNamePatient: ['', Validators.required],
       // dateOfBirth: ['', Validators.required],
   
       description: ['', Validators.required]


      });
  }
   // convenience getter for easy access to form fields
   get f() { return this.ajoutForm.controls; }

   addApp() {
       this.submitted = true;
 
       // stop here if form is invalid
       if (this.ajoutForm.invalid) {
           return;
       }
         
       this.apiappoinmentervice.addApp(this.ajoutForm.value).subscribe(res=>{
         Swal.fire('Doctor is added', 'success')
         //this.route.navigateByUrl('/listeUser')
       })
       // display form values on success
   }
 
   onReset() {
       this.submitted = false;
       this.ajoutForm.reset();
   }
     

}
