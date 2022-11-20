import {Component, NgModule} from '@angular/core';

import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/IUser";
import {NgModel} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user: IUser = {
    id: 0,
    name: 'asd'
  };


  constructor(private userService: UserService) {
  }


  search(): void {

  }
}
