import {Component} from '@angular/core';

import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/IUser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  id = 0;
  user: IUser

  constructor(private userService: UserService) {
  }

  getUser(): void {
    this.userService.getUserById(this.id).subscribe(value => this.user = value);

  }


  checkRefX(x: HTMLInputElement): void {
    console.log(x);
  }
}
