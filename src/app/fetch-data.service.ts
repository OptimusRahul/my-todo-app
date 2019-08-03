import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://jsonplaceholder.typicode.com';
const urlUserPath = '/users';
const urlTodoPath = '/todos';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  results:Object[];

  constructor(public _http: HttpClient) { }

    getTodoList(){
      return this._http.get(API_URL.concat(urlTodoPath))
                       .toPromise()
                       .then(this.extractData)
                       .catch(this.handleError);
    }

    getUserList(){
      return this._http.get(API_URL.concat(urlUserPath))
                       .toPromise()
                       .then(this.extractData)
                       .catch(this.handleError);


    }

    private extractData(res: Response) {
      let body = res;
      return body || {};
    }
  
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
