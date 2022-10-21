import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";

import {IUser} from "../../../interfaces/IUser";
import {urls} from "../../../constants";
import {IUserDetails} from "../../../interfaces/IUserDetails";


@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
     return this
       .httpClient
       .get<IUser[]>(urls.users)
       .pipe(
         map(value => value),
         catchError((err)=> throwError('qwqwqw'))
       );
  }

  getUser(id:number): Observable<IUser> {
    return this
      .httpClient
      .get<IUser>(urls.users + '/' + id)
  }

}
