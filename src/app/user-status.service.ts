import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

    isLoggedIn: boolean;
    
    logStatusChange(status: boolean){
        this.isLoggedIn = status;
        return this.isLoggedIn;
    }
}
