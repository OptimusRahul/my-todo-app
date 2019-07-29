import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDetails } from './UserInterface'
import { Todo } from './TodoInterface';

const API_URL = environment.GuestLink;
const urlUserPath = '/users';
const urlTodoPath = '/todos';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(public _http: HttpClient) { }

    getTodoList():Observable<Todo[]>{
      catchError(error => {
        return throwError('Error: '+error);
      });
      return this._http.get<Todo[]>(API_URL.concat(urlTodoPath));
    }

    getUserList1(){
      catchError(error => {
        return throwError('Error: '+error);
      });
     /* fetch(API_URL.concat(urlUserPath))
      .then(response => response.json())
      .then(json => {return json});*/
      return this._http.get<UserDetails[]>(API_URL.concat(urlUserPath));
    }
}
