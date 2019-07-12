import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor() { }

  addSession(id,name){
    sessionStorage.setItem('weblog_user_id',id);
    sessionStorage.setItem('weblog_user_name',name);
  }

  getSession(){
    return sessionStorage.getItem('weblog_user');
  }

  getSessionUser(){
    return sessionStorage.getItem('weblog_user_name');
  }

  destroySession(){
    sessionStorage.removeItem('weblog_user');
    sessionStorage.removeItem('weblog_user_name');
  }

  isLoggedIn(){
    var token = this.getSession();
    if(token!=null){
      return true;
    }else{
      return false;
    }
  }
}
