import { Component, OnInit } from '@angular/core';
import { UserStatusService } from '../user-status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserStatusService]
})
export class NavbarComponent implements OnInit {
  
  isButtonVisible=false;

  constructor(private _status:UserStatusService) {}
  
  ngOnInit() { 
    this.isButtonVisible = this._status.isLoggedIn;
    console.log(this.isButtonVisible)
  }

}
