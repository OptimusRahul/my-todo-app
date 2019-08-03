import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isButtonVisible=false;

  constructor(private router: Router, private _auth:AuthService) {}
  
  ngOnInit() {
  }

  redirectToHome(event:any){
    event.preventDefault();
    if(this._auth.checkStatus()){
      this.router.navigate(['/dashboard']);
    }
  }

}
