import {Component} from '@angular/core';

import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/IUser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: IUser = {};
  users: IUser[];

  constructor(private userService: UserService) {
  }

  search(): void {
       this.userService.getUsers().subscribe(values => {
         const filterUsers = this.userService.filterUser(values, this.user);
         this.users = filterUsers;
         console.log(filterUsers);
       });
  }
}
