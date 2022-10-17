import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of, throwError} from 'rxjs';


import {IUser} from "../../interfaces/IUser";
import {UserDataService} from "./user-data.service";



@Injectable({
  providedIn: 'root'
})

export class UsersResolver implements Resolve<IUser[]> {

  constructor(private userService: UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userService.getUsers()

  }
}
