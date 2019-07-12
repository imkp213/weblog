import { UserAuthService } from './user-auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private auth:UserAuthService,
    public router: Router){}

  canActivate(){
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['user-login']);
      return false;
    }
    return true;
  }
}
