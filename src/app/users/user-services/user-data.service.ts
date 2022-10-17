import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';

import {IUser} from "../../interfaces/IUser";



@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private _url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
     return this
       .httpClient
       .get<IUser[]>(this._url)
       .pipe(
         map(value => value),
         catchError((err) => throwError("qwqeqw"))
       );
  }

  getUser(id:string):Observable<IUser>{
    return this.httpClient.get<IUser>(this._url + '/' + id);
  }

}
