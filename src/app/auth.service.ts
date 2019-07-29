import { Injectable, OnInit } from '@angular/core';
import { FetchDataService } from './fetch-data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  user: any;
  errorMsg: string;
  defaultPass = "todoapp";
  status : Boolean;
  userId : number;

  constructor(private _fetchData: FetchDataService){ }

  ngOnInit(){

  }

  getUserDetails(username: String, password: String){
    this._fetchData.getUserList1().subscribe(data=> {
      for(var i=0; i<data.length; i++){
        if(data[i].username === username && password === this.defaultPass){
          this.status = true;
          this.user = data[i];
          break;
        }
        else{
          this.status = false;
          this.user = [];
        }
      }
    }, error=> console.log(error));
    if(this.status)
      return this.user;
     else
      return this.status;
  }
}
