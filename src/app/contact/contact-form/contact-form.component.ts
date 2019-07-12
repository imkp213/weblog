import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeblogService } from '../../services/weblog.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private weblogService:WeblogService,
    private http: HttpClient
  ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          subject: ['', Validators.required],
          message: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
      });

      // this.weblogService.fetchUsers().subscribe((data)=>{
      //   console.log(data);
      // });

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      // alert(JSON.stringify(this.registerForm.value));

      this.http.post("http://localhost/fashion/api/send-contact",this.registerForm.value).subscribe(
        data  => {
          console.log("POST Request is successful ", data);
        },
        error  => {
          console.log("Error", error);
        }
      );
  }
}
