import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserDataService} from "../../user-services/user-data.service";
import {IUser} from "../../../interfaces/IUser";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: IUser[]

  constructor(private userDataService: UserDataService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({usersData}) => this.users = usersData );
  }

}
