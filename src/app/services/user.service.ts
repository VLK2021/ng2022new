import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces/IUser";
import {environment} from "../../environments/environment";


const {API} = environment;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  users: IUser[];

  constructor(private httpClient: HttpClient) {
  }

  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getUsers(): Observable<IUser[]> {
     return this.httpClient.get<IUser[]>(`${API}/users`)
  }

  filterUser(users:IUser[], user:any): IUser[] {
    console.log(user);
    return users.filter(value => value.id === +user.id || value.name?.toLowerCase().includes(user.name.toLowerCase()))
  }


}
