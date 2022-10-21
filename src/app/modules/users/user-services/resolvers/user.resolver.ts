import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IUser} from "../../../../interfaces/IUser";
import {UserDataService} from "../user-data.service";


@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<IUser> {

  constructor(private userService:UserDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const {id} = route.params;
    return this.userService.getUser(id);
  }

}
