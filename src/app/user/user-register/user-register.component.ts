import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeblogService } from '../../services/weblog.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private webBlogApi: WeblogService,
        private http: HttpClient,
        private toastr: ToastrService) { 
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            // confirmPassword: ['', Validators.required]
        });
    }
    
    ngOnInit(){}

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        
        this.webBlogApi.userRegister(this.registerForm.value).subscribe(
            data  => {
                if(data['status']==true){
                    this.toastr.success('','You have successfully registered',{
                        timeOut:1500
                    });
                    
                    this.registerForm.reset();
                    this.submitted = false;
                }
            },
            error  => {
                console.log("Error", error);
            }
        );
    }

}
