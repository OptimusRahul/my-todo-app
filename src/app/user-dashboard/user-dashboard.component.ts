import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})

export class UserDashboardComponent implements OnInit {
  public lists = [];
  user:any;
  public errorMsg;
  count=0;
  islogout: boolean;

  constructor(private _fetchData: FetchDataService,
              private router: Router,
              private _auth:AuthService) {     
  //this.user = this.router.getCurrentNavigation().extras;
  }

  ngOnInit() {
      this._auth.setCookie('This is my first cookie');
      this.user = JSON.parse(localStorage.getItem('user'));
      this.getData(this.user);
  }
  
  getData(obj:any){
    console.log(obj)
    this._fetchData.getTodoList().then(data => {
      let id=obj.id;
      if(data.length !== 0) this.islogout = true;
      for(var i=0; i<data.length; i++){
        if(data[i].userId === id){
          this.lists.push(data[i]);
        }
      }
    },
    error => this.errorMsg = JSON.stringify(error));
  }
  

  onLogout(event:any){
    event.preventDefault();
    this._auth.clearLocalStorage();
    this._auth.deleteCookie();
    this.router.navigate(['/home']);

  }
}
