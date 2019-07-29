import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserStatusService } from '../user-status.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [UserStatusService, NavbarComponent]
})

export class LoginFormComponent {  

  users=[];
  currUser: any;
  str: any;

  constructor(private _auth: AuthService, private router: Router, private _status: UserStatusService, private _navbar: NavbarComponent) { }

  onSubmit(event:any){
    event.preventDefault();
    const  target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.str = this._auth.getUserDetails(username, password);
    this._status.logStatusChange(true);   
    console.log(this._status.isLoggedIn) 
    if(this._status.isLoggedIn){
      if(this._auth.getUserDetails(username, password)){
        this._status.isLoggedIn = true;
        this._navbar.ngOnInit();
        this.router.navigate(['/dashboard'],this.str);
     }else{
        alert('failure')
      }
    }
    return this.str;
  }
}
