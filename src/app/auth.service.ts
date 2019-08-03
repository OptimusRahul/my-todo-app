import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  cookie:any;
  localData:any;
  persitentData = JSON.parse(localStorage.getItem(this.localData)|| 'false');
  
  constructor(private _cookie: CookieService) { }

  setCookie(data:any){
    this.cookie = data;
    this._cookie.set(this.cookie, data);
    localStorage.setItem(this.localData, 'true');
  }

  deleteCookie(){
    this._cookie.delete(this.cookie);
  }

  clearLocalStorage(){
    localStorage.removeItem('user');
  }

  checkLoggedIn(){
    return localStorage.length;
  }

  checkStatus(){
    return this._cookie.check(this.cookie);
  }


}
