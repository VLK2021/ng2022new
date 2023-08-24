import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces/IUserInterface";
import {urls} from "../constants/urls";
import {ISingleUser} from "../interfaces/ISingleUserInterface";


@Injectable({
  providedIn: 'root'
})


export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users);
  }

  getSingleUser(id: number): Observable<ISingleUser> {
    return this.httpClient.get<ISingleUser>(urls.users + '/' + id);
  }


}
