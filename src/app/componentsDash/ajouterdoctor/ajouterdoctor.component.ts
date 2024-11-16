import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApidoctorService } from 'src/app/services/apidoctor.service';
import { ApietudiantService } from 'src/app/services/apietudiant.service';
import { MustMatch } from 'src/helpers/mustmatch';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-ajouterdoctor',
  templateUrl: './ajouterdoctor.component.html',
  styleUrls: ['./ajouterdoctor.component.css']
})
export class AjouterdoctorComponent implements OnInit {
 
  ajoutForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    //private route:Router,
     private apiuserservice:ApidoctorService) { }

  ngOnInit() {
      this.ajoutForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        telephoneNumber: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
     dateOfBirth: ['', Validators.required],
      
        specialityId: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.ajoutForm.controls; }

  addDoctor() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.ajoutForm.invalid) {
          return;
      }
        
      this.apiuserservice.addDoctor(this.ajoutForm.value).subscribe(res=>{
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