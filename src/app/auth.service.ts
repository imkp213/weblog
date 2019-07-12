import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  baseUrl = "http://localhost/weblog/api/";
  constructor(private http: HttpClient) { }

  tryAuthenticateUser(data):Observable<Object>{
    return this.http.post(this.baseUrl+'user-login',data);
  }

  setLoggedIn(value:boolean,user:any){
    this.isLoggedInStatus = value;
    localStorage.setItem('loggedIn',value.toString());
    localStorage.setItem('user',JSON.stringify(user));
  }

  isUserLoggedIn(){
    // return this.isLoggedInStatus;
    return JSON.parse(localStorage.getItem('loggedIn') || this.isLoggedInStatus.toString())
  }

  getLoggedInuser(){
    return localStorage.getItem('user');
  }

  getUserName(){
    var user = JSON.parse(localStorage.getItem('user'));
    return user;
  }
}
