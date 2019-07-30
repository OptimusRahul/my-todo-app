import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatusService } from '../user-status.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [UserStatusService, NavbarComponent]
})

export class LoginFormComponent {  

  user: any;
  errorMsg: string;
  defaultPass = "todoapp";
  status : Boolean;
  userId : number;

  constructor(private _fetchData: FetchDataService,
              private router: Router, 
              private _userStatus: UserStatusService,
              private _navBar: NavbarComponent) { }

  onSubmit(event:any){
    event.preventDefault();
    const  target = event.target;
    let username = target.querySelector('#username').value;
    let password = target.querySelector('#password').value;
    this._fetchData.getUserList().then(data => {    
      for(var i=0; i<data.length; i++){
        if(data[i].username === username && password === this.defaultPass){
          this._userStatus.logStatusChange(true);
          this.user = data[i];
          this.router.navigate(['/dashboard'],this.user);
          break;
        }
        else{
          this.status = false;
        }
      }
    }).catch((error: any) => console.log(error)) ;

    if(this.status)
      alert('User does not exist')
  }


  /*async onSubmit(event:any){
    event.preventDefault();
    const  target = event.target;
    let username = target.querySelector('#username').value;
    let password = target.querySelector('#password').value;
    this.str = this._auth.getUserDetails(username, password);
    if(this._status.isLoggedIn){
      if(await this._auth.getUserDetails(username, password)){
        this._status.setToken('token')
        this._navbar.ngOnInit();
        username = '';
        password = '';
        this.router.navigate(['/dashboard'],this.str);
        
     }else{
        alert('failure')
      }
    }
    return this.str;
  }*/
}
