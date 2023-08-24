import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {UsersService} from "../../services/users.service";
import {ISingleUser} from "../../interfaces/ISingleUserInterface";

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  singleUser: ISingleUser;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UsersService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getSingleUser(id).subscribe(value => this.singleUser = value);
    })
  }

}
