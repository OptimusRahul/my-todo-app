import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

    public isLoggedIn = false;
    
    logStatusChange(status: boolean){
        this.isLoggedIn = status;
    }
}
