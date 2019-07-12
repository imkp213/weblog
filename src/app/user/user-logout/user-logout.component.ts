import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent{

  constructor(
    private router:Router,
    private auth:AuthService
  ) { 
    var user = {};
    this.auth.setLoggedIn(false,user);
    this.router.navigate(['user-login']);
  }
}
