import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  userDetailsObj: IUser

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    // this.activatedRoute.url.subscribe(value => console.log(value))
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getUser(id).subscribe(value => this.userDetailsObj = value)
    })
  }

}
