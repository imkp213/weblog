import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
   private auth:AuthService,
   private router:Router
  ){}
  canActivate(
    next:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      if(!this.auth.isUserLoggedIn()){
        this.router.navigate(['user-login']);
      }
      
      return this.auth.isUserLoggedIn();
    }
}
