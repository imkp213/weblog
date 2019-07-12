import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeblogService } from '../../services/weblog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userlogin: FormGroup;
    submitted = false;
    authenticated = 0;
    constructor(
        private formBuilder: FormBuilder,
        private apiservice: WeblogService,
        private auth:AuthService,
        private router:Router) { 
        this.userlogin = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }
    
    ngOnInit(){}

    get f() { return this.userlogin.controls; }
    
    onSubmit() {
        this.submitted = true;
        this.authenticated = 0;
        if (this.userlogin.invalid) {
            return;
        }

        this.auth.tryAuthenticateUser(this.userlogin.value).subscribe(
            data=>{
                if(data['status']==true){
                    var user;
                    user = {
                        'user':data['data'].user_data.user_name,
                        'token':data['data'].user_data.user_token,
                        'liked':data['data'].user_data.user_liked_blog
                    }
                    this.router.navigate(['user-profile']);
                    this.auth.setLoggedIn(true,user);
                }else{
                    this.authenticated = 2;
                }
                console.log(data);
            },error => {
                
            }
        );
    }

}


// alert(JSON.stringify(this.userlogin.value));

// this.apiservice.userLogin(this.userlogin.value).subscribe(
//     data  => {
//         if(data['status']==false){
//             this.authenticated = 2;
//         }else{
//             this.authenticated = 1;
//         }
//         console.log(data);
//     },
//     error  => {
//         // console.log("Error", error);
//     }
// );
