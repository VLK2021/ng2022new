import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IUser} from "../../interfaces/IUser";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  @Output()
  userEmitter = new EventEmitter<IUser>();
  details: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  emitt(user: IUser): void {
    this.userEmitter.emit(user);

    this.details = "dsome details about user";
  }


}
